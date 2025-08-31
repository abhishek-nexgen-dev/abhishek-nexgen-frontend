'use client';
import React, { useState } from 'react';
import {
  Dialog,
  DialogTrigger,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
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
  SelectItem,
} from '@/components/ui/select';
import { CalendarIcon, Clock } from 'lucide-react';
import { IoIosCall } from 'react-icons/io';

const hours = Array.from({ length: 12 }, (_, i) => `${i + 1}`.padStart(2, '0'));
const minutes = ['00', '15', '30', '45'];
const periods = ['AM', 'PM'];

const CallBack = () => {
  const [date, setDate] = useState<Date | undefined>(undefined);
  const [hour, setHour] = useState('');
  const [minute, setMinute] = useState('');
  const [period, setPeriod] = useState('');

  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button
          variant="default"
          className="text-[2vw] flex items-center justify-center"
        >
          <IoIosCall className="w-[2vw] h-[2vw]" />
        </Button>
      </DialogTrigger>

      <DialogContent className="rounded-xl shadow-lg border border-gray-200 dark:border-[#232526] bg-white dark:bg-[#191919] text-gray-900 dark:text-white">
        <DialogHeader>
          <DialogTitle className="text-[#ED6B43] text-lg font-bold">
            Request a Call Back
          </DialogTitle>
          <DialogDescription className="text-gray-600 dark:text-gray-400">
            Please enter your details and select a preferred date and time for
            the call.
          </DialogDescription>
        </DialogHeader>

        <form className="flex flex-col gap-4 mt-4">
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
              placeholder="Name"
              required
              className="bg-white dark:bg-[#232526] text-gray-900 dark:text-white border border-gray-300 dark:border-[#333] placeholder:text-gray-400"
            />
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
              placeholder="Phone Number"
              required
              className="bg-white dark:bg-[#232526] text-gray-900 dark:text-white border border-gray-300 dark:border-[#333] placeholder:text-gray-400"
            />
          </div>

          {/* Date Picker */}
          <div className="flex flex-col gap-2">
            <Label
              htmlFor="date"
              className="text-xs text-gray-700 dark:text-gray-400"
            >
              Select Date
            </Label>
            <Popover>
              <PopoverTrigger asChild>
                <Button
                  variant="outline"
                  className="w-full flex justify-between items-center bg-white dark:bg-[#232526] text-gray-900 dark:text-white border border-gray-300 dark:border-[#333] px-4 py-2"
                  id="date"
                >
                  {date ? (
                    <span>{date.toLocaleDateString()}</span>
                  ) : (
                    <span className="text-gray-400">Select Date</span>
                  )}
                  <CalendarIcon className="ml-2 h-5 w-5 text-[#FF8660]" />
                </Button>
              </PopoverTrigger>
              <PopoverContent className="w-auto p-0 bg-white dark:bg-[#232526] border border-gray-300 dark:border-[#333]">
                <Calendar
                  mode="single"
                  selected={date}
                  onSelect={setDate}
                  className="rounded-md border-none bg-white dark:bg-[#232526] text-gray-900 dark:text-white"
                />
              </PopoverContent>
            </Popover>
          </div>

          {/* Time Picker */}
          <div className="flex flex-col gap-2">
            <Label className="text-xs text-gray-700 dark:text-gray-400">
              Select Time
            </Label>
            <div className="flex gap-2">
              {/* Hour */}
              <Select value={hour} onValueChange={setHour}>
                <SelectTrigger className="w-[5rem] bg-white dark:bg-[#232526] text-gray-900 dark:text-white border border-gray-300 dark:border-[#333]">
                  <SelectValue placeholder="Hour" />
                </SelectTrigger>
                <SelectContent className="bg-white dark:bg-[#232526] text-gray-900 dark:text-white border border-gray-300 dark:border-[#333]">
                  {hours.map((h) => (
                    <SelectItem key={h} value={h}>
                      {h}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>

              <span className="self-center text-gray-900 dark:text-white">
                :
              </span>

              {/* Minute */}
              <Select value={minute} onValueChange={setMinute}>
                <SelectTrigger className="w-[5rem] bg-white dark:bg-[#232526] text-gray-900 dark:text-white border border-gray-300 dark:border-[#333]">
                  <SelectValue placeholder="Min" />
                </SelectTrigger>
                <SelectContent className="bg-white dark:bg-[#232526] text-gray-900 dark:text-white border border-gray-300 dark:border-[#333]">
                  {minutes.map((m) => (
                    <SelectItem key={m} value={m}>
                      {m}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>

              {/* AM/PM */}
              <Select value={period} onValueChange={setPeriod}>
                <SelectTrigger className="w-[5rem] bg-white dark:bg-[#232526] text-gray-900 dark:text-white border border-gray-300 dark:border-[#333]">
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

              <Clock className="ml-2 h-5 w-5 text-[#FF8660] self-center" />
            </div>
          </div>

          {/* Submit */}
          <Button
            type="submit"
            className="mt-2 bg-[#FF8660] hover:bg-[#D5491D] text-white font-semibold rounded-lg"
          >
            Submit
          </Button>
        </form>
      </DialogContent>
    </Dialog>
  );
};

export default CallBack;
