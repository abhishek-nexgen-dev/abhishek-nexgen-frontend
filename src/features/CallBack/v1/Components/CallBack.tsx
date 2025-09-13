'use client';
import React, { useState } from 'react';
import { useForm, SubmitHandler } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';

import {
  Dialog,
  DialogTrigger,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
  DialogFooter,
} from '@/components/ui/dialog';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { Calendar } from '@/components/ui/calendar';
import {
  Popover,
  PopoverTrigger,
  PopoverContent,
} from '@/components/ui/popover';
import { Label } from '@/components/ui/label';
import {
  Select,
  SelectTrigger,
  SelectValue,
  SelectContent,
  SelectGroup,
  SelectItem,
} from '@/components/ui/select';
import { CalendarIcon, Clock } from 'lucide-react';
import { IoIosCall } from 'react-icons/io';

import { toast, ToastContainer } from 'react-toastify';
import { CallBack_Form_Validator } from '../Validator/CallBack.validator';
import { CallBack_Form_Type } from '../Type/CallBack.type';
import useCallBack_Api from '../hook/useCallBack_Api';

// First, update the constants for the time options
const hours = [
  'Hr',
  ...Array.from({ length: 12 }, (_, i) => `${i + 1}`.padStart(2, '0')),
];
const minutes = ['Min', '00', '15', '30', '45']; // Remove the empty string and add 'Min'
const periods = ['AM/PM', 'AM', 'PM'];

const CallBack = () => {
  const [date, setDate] = useState<Date | undefined>(undefined);
  const [isOpen, setIsOpen] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  // Get today's date for min date validation
  const today = new Date();
  today.setHours(0, 0, 0, 0);

  const {
    register,
    handleSubmit,
    reset,
    setValue,
    clearErrors,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(CallBack_Form_Validator),
  });

  const handleDateChange = (newDate: Date | undefined) => {
    setDate(newDate);
    if (newDate) {
      setValue('Date', newDate);
    }
  };

  const onSubmit: SubmitHandler<CallBack_Form_Type> = async (data) => {
    try {
      setIsSubmitting(true);
      console.log('Form submitted successfully:', data);

      let res = await useCallBack_Api.createNewCallback(data);
      console.log('API Response:', res);

      await new Promise((resolve) => setTimeout(resolve, 1000));

      toast.success(res.message, {
        theme: 'dark',
        autoClose: 1000,
        draggableDirection: 'y',
      });

      reset();
      clearErrors();
      setDate(undefined);
      setIsOpen(false);
    } catch (error: any) {
      console.error('Error submitting form:-->', error.response, error.message);
      toast.error(error.message, {
        theme: 'dark',

        autoClose: 1000,
        draggableDirection: 'y',
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <Dialog
      open={isOpen}
      onOpenChange={(open) => {
        setIsOpen(open);
        if (!open) reset(); // Reset form when dialog is closed
      }}
    >
      <ToastContainer />
      <DialogTrigger asChild>
        <Button
          variant="default"
          className="text-[2vw] flex items-center justify-center"
        >
          <IoIosCall className="w-[2vw] h-[2vw]" />
        </Button>
      </DialogTrigger>

      <DialogContent className="rounded-xl shadow-lg border border-gray-200 dark:border-[#232526] bg-white dark:bg-[#191919] text-gray-900 dark:text-white sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle className="text-[#ED6B43] text-lg font-bold">
            Request a Call Back
          </DialogTitle>
          <DialogDescription className="text-gray-600 dark:text-gray-400">
            Please enter your details and select a preferred date and time for
            the call.
          </DialogDescription>
        </DialogHeader>

        <form
          className="flex flex-col gap-4 mt-4"
          onSubmit={handleSubmit(onSubmit)}
        >
          {/* Name */}
          <div className="flex flex-col gap-2">
            <Label
              htmlFor="name"
              className="text-xs text-gray-700 dark:text-gray-400"
            >
              Name
            </Label>
            <Input
              id="name"
              type="text"
              {...register('Name')}
              placeholder="Your Full Name"
              className={`bg-white dark:bg-[#232526] text-gray-900 dark:text-white border ${errors.Name ? 'border-red-500' : 'border-gray-300 dark:border-[#333]'} placeholder:text-gray-400 w-auto`}
            />
            {errors.Name && (
              <p className="text-red-500 text-xs mt-1">{errors.Name.message}</p>
            )}
          </div>

          {/* Phone */}
          <div className="flex flex-col gap-2">
            <Label
              htmlFor="phone"
              className="text-xs text-gray-700 dark:text-gray-400"
            >
              Phone
            </Label>
            <Input
              id="phone"
              type="tel"
              {...register('Phone')}
              placeholder="Phone Number"
              className={`bg-white dark:bg-[#232526] text-gray-900 dark:text-white border ${errors.Phone ? 'border-red-500' : 'border-gray-300 dark:border-[#333]'} placeholder:text-gray-400 w-auto`}
            />
            {errors.Phone && (
              <p className="text-red-500 text-xs mt-1">
                {errors.Phone.message}
              </p>
            )}
          </div>

          {/* Date Picker */}
          <div className="flex flex-col gap-2">
            <Label
              htmlFor="callbackDate"
              className="text-xs text-gray-700 dark:text-gray-400"
            >
              Select Date
            </Label>
            <Popover>
              <PopoverTrigger asChild>
                <Button
                  type="button"
                  variant="outline"
                  className={`w-full flex justify-between items-center bg-white dark:bg-[#232526] text-gray-900 dark:text-white border ${errors.Date ? 'border-red-500' : 'border-gray-300 dark:border-[#333]'} px-4 py-2`}
                  id="callbackDate"
                >
                  {date ? (
                    <span>{date.toLocaleDateString()}</span>
                  ) : (
                    <span className="text-gray-400">Select Date</span>
                  )}
                  <CalendarIcon className="ml-2 h-5 w-5 text-[#FF8660]" />
                </Button>
              </PopoverTrigger>
              <PopoverContent className="p-0 bg-white dark:bg-[#232526] border border-gray-300 dark:border-[#333] w-auto">
                <Calendar
                  mode="single"
                  selected={date}
                  onSelect={handleDateChange}
                  className="rounded-md border-none bg-white dark:bg-[#232526] text-gray-900 dark:text-white"
                  fromDate={today} // Use today as the minimum date
                  disabled={(date) => {
                    // Disable past dates including today if it's after business hours
                    const now = new Date();
                    const isToday =
                      date.getDate() === now.getDate() &&
                      date.getMonth() === now.getMonth() &&
                      date.getFullYear() === now.getFullYear();

                    return date < today || (isToday && now.getHours() >= 17);
                  }}
                />
              </PopoverContent>
            </Popover>
            {errors.Date && (
              <p className="text-red-500 text-xs mt-1">{errors.Date.message}</p>
            )}
          </div>

          {/* Time Picker */}
          <div className="flex flex-col gap-2">
            <Label className="text-xs text-gray-700 dark:text-gray-400">
              Select Time
            </Label>
            <div className="flex gap-2">
              {/* Hour */}
              <div className="flex flex-col">
                <Select
                  onValueChange={(value) => setValue('Hours', value)}
                  defaultValue="Hr"
                >
                  <SelectTrigger
                    className={`w-[5rem] bg-white dark:bg-[#232526] text-gray-900 dark:text-white border ${errors.Hours ? 'border-red-500' : 'border-gray-300 dark:border-[#333]'}`}
                  >
                    <SelectValue placeholder="Hr" />
                  </SelectTrigger>
                  <SelectContent className="bg-white dark:bg-[#232526] text-gray-900 dark:text-white border border-gray-300 dark:border-[#333]">
                    {hours.map((h) => (
                      <SelectItem key={h} value={h}>
                        {h}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
                {errors.Hours && (
                  <p className="text-red-500 text-xs mt-1">
                    {errors.Hours.message}
                  </p>
                )}
              </div>

              <span className="self-center text-gray-900 dark:text-white">
                :
              </span>

              {/* Minute */}
              <div className="flex flex-col">
                <Select
                  onValueChange={(value) => setValue('Minutes', value)}
                  defaultValue="Min"
                >
                  <SelectTrigger
                    className={`w-[5rem] bg-white dark:bg-[#232526] text-gray-900 dark:text-white border ${errors.Minutes ? 'border-red-500' : 'border-gray-300 dark:border-[#333]'}`}
                  >
                    <SelectValue placeholder="Min" />
                  </SelectTrigger>
                  <SelectContent className="bg-white dark:bg-[#232526] text-gray-900 dark:text-white border border-gray-300 dark:border-[#333]">
                    <SelectGroup>
                      {minutes.map((m) => (
                        <SelectItem key={m} value={m}>
                          {m}
                        </SelectItem>
                      ))}
                    </SelectGroup>
                  </SelectContent>
                </Select>
                {errors.Minutes && (
                  <p className="text-red-500 text-xs mt-1">
                    {errors.Minutes.message}
                  </p>
                )}
              </div>

              {/* AM/PM */}
              <div className="flex flex-col">
                <Select
                  onValueChange={(value) =>
                    setValue('Meridiem', value as 'AM' | 'PM')
                  }
                >
                  <SelectTrigger
                    className={`w-[5rem] bg-white dark:bg-[#232526] text-gray-900 dark:text-white border ${
                      errors.Meridiem
                        ? 'border-red-500'
                        : 'border-gray-300 dark:border-[#333]'
                    }`}
                  >
                    <SelectValue placeholder="AM/PM" />
                  </SelectTrigger>
                  <SelectContent className="bg-white dark:bg-[#232526] text-gray-900 dark:text-white border border-gray-300 dark:border-[#333]">
                    {periods.map((p) => (
                      <SelectItem key={p} value={p}>
                        {p}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>

                {errors.Meridiem && (
                  <p className="text-red-500 text-xs mt-1">
                    {errors.Meridiem.message}
                  </p>
                )}
              </div>

              <Clock className="ml-2 h-5 w-5 text-[#FF8660] self-center" />
            </div>
          </div>

          {/* Submit */}
          <Button
            type="submit"
            disabled={isSubmitting}
            className="mt-2 bg-[#FF8660] hover:bg-[#D5491D] text-white font-semibold rounded-lg disabled:opacity-70 disabled:cursor-not-allowed"
          >
            {isSubmitting ? (
              <>
                <span className="mr-2 inline-block animate-spin">⏳</span>
                Processing...
              </>
            ) : (
              'Request Callback'
            )}
          </Button>
        </form>
      </DialogContent>
    </Dialog>
  );
};

export default CallBack;
