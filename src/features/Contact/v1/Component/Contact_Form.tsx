'use client';
import React, { useState } from 'react';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import { Textarea } from '@/components/ui/textarea';
import { useForm, SubmitHandler } from 'react-hook-form';
import { Button } from '@/components/ui/button';
import axios from 'axios';
import { yupResolver } from '@hookform/resolvers/yup';
import { ToastContainer, toast } from 'react-toastify';
import { Contact_Form_Type } from '../Type/Contact.type';
import { Contact_Country } from '../Constant/Contact.constant';
import { Contact_schema } from '../Validator/ContactForm.validator';
import ContactApi from '../hook/Contact.api';

const Contact_Form = () => {
  const [countryCode, setCountryCode] = useState('+91');
  const [isSubmitting, setIsSubmitting] = useState(false);

  // Form validation schema using Yup

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
    setValue,
  } = useForm<Contact_Form_Type>({
    resolver: yupResolver(Contact_schema),
    defaultValues: {
      country_code: '+91',
    },
  });

  // Form submission handler
  const onSubmit: SubmitHandler<Contact_Form_Type> = async (data) => {
    setIsSubmitting(true);
    try {
      let res = await ContactApi.createContact(data);

      toast.success(res.message);
      reset();
    } catch (error: any) {
      console.log('Error submitting form:', error.response, error.message);
      toast.error(error?.message || 'Internal Server Error', {
        theme: 'dark',
        autoClose: 1000,
        draggableDirection: 'y',
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <form
      className="Contact_Form  w-full mx-auto bg-gradient-to-br from-[#232526] via-[#1E1E1E] to-[#232526] rounded-2xl p-8 md:p-10 text-white shadow-2xl space-y-8 border-[1px] border-[#444]"
      onSubmit={handleSubmit(onSubmit)}
    >
      <ToastContainer />
      {/* Form content remains the same */}
      {/* Heading & Paragraph */}
      <div className="mb-4 text-center">
        <h2 className="text-3xl md:text-4xl font-extrabold text-[#FF8660] mb-2 font-[var(--font-plus-jakarta-sans)]">
          Let's Connect!
        </h2>
        <p className="text-base md:text-lg text-[#C5C5C5]">
          Have a project idea, collaboration, or just want to say hello? Fill
          out the form below and I'll get back to you personally.
        </p>
      </div>

      {/* Name Field */}
      <div className="flex flex-col space-y-2">
        {errors.name && (
          <span className="text-red-500 text-sm">{errors.name.message}</span>
        )}
        <Label className="text-lg md:text-xl font-medium">Your Name</Label>
        <Input
          {...register('name')}
          type="text"
          className={`h-12 bg-[#232526] border ${errors.name ? 'border-red-500' : 'border-[#444]'} rounded-lg px-4 text-white text-base placeholder:text-[#888] focus:border-[#FF8660] focus:ring-2 focus:ring-[#FF8660] transition`}
          placeholder="Enter your name"
        />
      </div>

      {/* Email Field */}
      <div className="flex flex-col space-y-2">
        {errors.email && (
          <span className="text-red-500 text-sm">{errors.email.message}</span>
        )}
        <Label className="text-lg md:text-xl font-medium">Email</Label>
        <Input
          {...register('email')}
          type="email"
          className={`h-12 bg-[#232526] border ${errors.email ? 'border-red-500' : 'border-[#444]'} rounded-lg px-4 text-white text-base placeholder:text-[#888] focus:border-[#FF8660] focus:ring-2 focus:ring-[#FF8660] transition`}
          placeholder="Enter your email"
        />
      </div>

      {/* Mobile Number Field */}
      <div className="flex flex-col space-y-2">
        {/* Mobile Input */}
        {errors.phone && (
          <span className="text-red-500 text-sm">{errors.phone.message}</span>
        )}
        <Label className="text-lg md:text-xl font-medium">Mobile Number</Label>
        <div className="flex gap-3 items-center">
          {/* Country Code Select */}

          <div className="w-[35%]">
            <Select
              onValueChange={(value) => {
                setValue('country_code', value);
                setCountryCode(value);
              }}
              defaultValue="+91"
            >
              <SelectTrigger
                className={`h-12 bg-[#232526] border ${errors.country_code ? 'border-red-500' : 'border-[#444]'} rounded-lg px-3 text-white text-base`}
              >
                <SelectValue placeholder="+91" />
              </SelectTrigger>
              <SelectContent className="bg-[#232526] text-white text-base max-h-[200px] overflow-y-auto rounded-lg shadow-md">
                <SelectGroup>
                  <SelectLabel className="text-[#AAAAAA] px-2 py-1 text-sm">
                    Country Codes
                  </SelectLabel>
                  {Contact_Country.map((country, index) => (
                    <SelectItem
                      key={`${country.Country_Name}-${index}`} // Create unique key combination
                      value={country.Country_Code}
                      className="flex items-center gap-2 px-3 py-2 hover:bg-[#3A3A3A]"
                    >
                      <img
                        src={country.Country_Flag_Image}
                        alt={country.Country_Name}
                        className="w-5 h-4 object-cover"
                      />
                      {country.Country_Name} ({country.Country_Code})
                    </SelectItem>
                  ))}
                </SelectGroup>
              </SelectContent>
            </Select>
          </div>

          <Input
            {...register('phone')}
            type="tel"
            className={`w-[65%] h-12 bg-[#232526] border ${errors.phone ? 'border-red-500' : 'border-[#444]'} rounded-lg px-4 text-white text-base placeholder:text-[#888] focus:border-[#FF8660] focus:ring-2 focus:ring-[#FF8660] transition`}
            placeholder="Enter your mobile number"
          />
        </div>
      </div>

      {/* Message Field */}
      <div className="flex flex-col space-y-2">
        {errors.message && (
          <span className="text-red-500 text-sm">{errors.message.message}</span>
        )}
        <Label className="text-lg md:text-xl font-medium">Message</Label>
        <Textarea
          {...register('message')}
          rows={5}
          className={`bg-[#232526] border ${errors.message ? 'border-red-500' : 'border-[#444]'} rounded-lg px-4 py-3 text-white text-base placeholder:text-[#888] resize-none focus:border-[#FF8660] focus:ring-2 focus:ring-[#FF8660] transition`}
          placeholder="Type your message..."
        />
      </div>

      {/* Submit Button */}
      <div className="pt-2">
        <Button
          type="submit"
          disabled={isSubmitting}
          className="w-full h-12 text-base font-semibold bg-[#FF8660] text-white hover:bg-[#D5491D] transition rounded-lg shadow-lg disabled:opacity-70 disabled:cursor-not-allowed"
        >
          {isSubmitting ? 'Sending...' : 'Send Message'}
        </Button>
      </div>
    </form>
  );
};

export default Contact_Form;
