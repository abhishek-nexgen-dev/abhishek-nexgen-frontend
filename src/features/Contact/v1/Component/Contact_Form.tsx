'use client';
import React from 'react';
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
import { Button } from '@/components/ui/button';

import { Contact_Country } from '../Constant/Contact.constant';

const Contact_Form = () => {
  return (
    <form
      className="Contact_Form w-full  mx-auto bg-gradient-to-br from-[#232526] via-[#1E1E1E] to-[#232526] rounded-2xl p-8 md:p-10 text-white shadow-2xl space-y-8"
      onSubmit={(e) => {
        e.preventDefault();
        alert('Thank you for reaching out! I will get back to you soon.');
      }}
    >
      {/* Heading & Paragraph */}
      <div className="mb-4 text-center">
        <h2 className="text-3xl md:text-4xl font-extrabold text-[#FF8660] mb-2 font-[var(--font-plus-jakarta-sans)]">
          Let's Connect!
        </h2>
        <p className="text-base md:text-lg text-[#C5C5C5]">
          Have a project idea, collaboration, or just want to say hello? Fill out the form below and I'll get back to you personally.
        </p>
      </div>

      {/* Name Field */}
      <div className="flex flex-col space-y-2">
        <Label className="text-lg md:text-xl font-medium">Your Name</Label>
        <Input
          type="text"
          className="h-12 bg-[#232526] border border-[#444] rounded-lg px-4 text-white text-base placeholder:text-[#888] focus:border-[#FF8660] focus:ring-2 focus:ring-[#FF8660] transition"
          placeholder="Enter your name"
        />
      </div>

      {/* Email Field */}
      <div className="flex flex-col space-y-2">
        <Label className="text-lg md:text-xl font-medium">Email</Label>
        <Input
          type="email"
          className="h-12 bg-[#232526] border border-[#444] rounded-lg px-4 text-white text-base placeholder:text-[#888] focus:border-[#FF8660] focus:ring-2 focus:ring-[#FF8660] transition"
          placeholder="Enter your email"
        />
      </div>

      {/* Mobile Number Field */}
      <div className="flex flex-col space-y-2">
        <Label className="text-lg md:text-xl font-medium">Mobile Number</Label>
        <div className="flex gap-3 items-center">
          {/* Country Code Select */}
          <div className="w-[35%]">
            <Select>
              <SelectTrigger className="h-12 bg-[#232526] border border-[#444] rounded-lg px-3 text-white text-base">
                <SelectValue placeholder="+91" />
              </SelectTrigger>
              <SelectContent className="bg-[#232526] text-white text-base max-h-[200px] overflow-y-auto rounded-lg shadow-md">
                <SelectGroup>
                  <SelectLabel className="text-[#AAAAAA] px-2 py-1 text-sm">
                    Country Codes
                  </SelectLabel>
                  {Contact_Country.map((country, index) => (
                    <SelectItem
                      key={index}
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
          {/* Mobile Input */}
          <Input
            type="tel"
            className="w-[65%] h-12 bg-[#232526] border border-[#444] rounded-lg px-4 text-white text-base placeholder:text-[#888] focus:border-[#FF8660] focus:ring-2 focus:ring-[#FF8660] transition"
            placeholder="Enter your mobile number"
          />
        </div>
      </div>

      {/* Message Field */}
      <div className="flex flex-col space-y-2">
        <Label className="text-lg md:text-xl font-medium">Message</Label>
        <Textarea
          rows={5}
          className="bg-[#232526] border border-[#444] rounded-lg px-4 py-3 text-white text-base placeholder:text-[#888] resize-none focus:border-[#FF8660] focus:ring-2 focus:ring-[#FF8660] transition"
          placeholder="Type your message..."
        />
      </div>

      {/* Submit Button */}
      <div className="pt-2">
        <Button
          type="submit"
          className="w-full h-12 text-base font-semibold bg-[#FF8660] text-white hover:bg-[#D5491D] transition rounded-lg shadow-lg"
        >
          Send Message
        </Button>
      </div>
    </form>
  );
};

export default Contact_Form;