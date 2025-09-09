import { Button } from '@/components/ui/button';
import { CardHeader } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import {
  InputOTP,
  InputOTPGroup,
  InputOTPSeparator,
  InputOTPSlot,
} from '@/components/ui/input-otp';
import { Label } from '@radix-ui/react-label';
import React from 'react';

const AuthComponent = () => {
  return (
    <form className="Auth_Component w-full  mx-auto bg-gradient-to-br from-[#232526] via-[#1E1E1E] to-[#232526] rounded-2xl text-white shadow-2xl overflow-hidden">
      {/* Image Header */}
      <CardHeader className="p-0">
        <div className="relative">
          <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-[#1E1E1E] z-10"></div>
          <img
            src="https://wallpapercat.com/w/full/c/7/e/5823589-2920x1640-desktop-hd-boy-programmer-wallpaper-image.jpg"
            className="w-full h-[40vh] object-cover object-center"
            alt="Admin Dashboard"
          />
          <div className="absolute bottom-4 left-6 z-20">
            <h2 className="text-3xl font-bold text-white">Welcome Back</h2>
            <p className="text-gray-300">Secure sign-in for Dashboard</p>
          </div>
        </div>
      </CardHeader>

      {/* Form Content */}
      <div className="p-8 space-y-8">
        {/* Admin Email Field */}
        <div className="flex flex-col space-y-3">
          <Label className="text-lg font-medium flex items-center">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
              fill="currentColor"
              className="w-5 h-5 mr-2 text-[#FF8660]"
            >
              <path d="M3 4a2 2 0 00-2 2v1.161l8.441 4.221a1.25 1.25 0 001.118 0L19 7.162V6a2 2 0 00-2-2H3z" />
              <path d="M19 8.839l-7.77 3.885a2.75 2.75 0 01-2.46 0L1 8.839V14a2 2 0 002 2h14a2 2 0 002-2V8.839z" />
            </svg>
            Admin Email
          </Label>
          <Input
            type="email"
            className="h-12 bg-[#232526] border border-[#444] hover:border-[#FF8660] focus:border-[#FF8660] focus:ring-1 focus:ring-[#FF8660] rounded-lg px-4 text-white text-base placeholder:text-[#888] transition-all duration-300"
            placeholder="Enter your admin email"
          />
        </div>

        {/* OTP Field */}
        <div className="flex flex-col space-y-3">
          <Label className="text-lg font-medium flex items-center">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
              fill="currentColor"
              className="w-5 h-5 mr-2 text-[#FF8660]"
            >
              <path
                fillRule="evenodd"
                d="M10 1a4.5 4.5 0 00-4.5 4.5V9H5a2 2 0 00-2 2v6a2 2 0 002 2h10a2 2 0 002-2v-6a2 2 0 00-2-2h-.5V5.5A4.5 4.5 0 0010 1zm3 8V5.5a3 3 0 10-6 0V9h6z"
                clipRule="evenodd"
              />
            </svg>
            Authentication OTP
          </Label>

          <InputOTP maxLength={6} className="w-full flex justify-center gap-2">
            <InputOTPGroup className="flex gap-2">
              <InputOTPSlot
                index={0}
                className="w-12 h-14 bg-[#232526] border-[#444] hover:border-[#FF8660] focus:border-[#FF8660] text-lg"
              />
              <InputOTPSlot
                index={1}
                className="w-12 h-14 bg-[#232526] border-[#444] hover:border-[#FF8660] focus:border-[#FF8660] text-lg"
              />
              <InputOTPSlot
                index={2}
                className="w-12 h-14 bg-[#232526] border-[#444] hover:border-[#FF8660] focus:border-[#FF8660] text-lg"
              />
            </InputOTPGroup>
            <InputOTPSeparator>
              <div className="w-2 h-2 rounded-full bg-[#FF8660]"></div>
            </InputOTPSeparator>
            <InputOTPGroup className="flex gap-2">
              <InputOTPSlot
                index={3}
                className="w-12 h-14 bg-[#232526] border-[#444] hover:border-[#FF8660] focus:border-[#FF8660] text-lg"
              />
              <InputOTPSlot
                index={4}
                className="w-12 h-14 bg-[#232526] border-[#444] hover:border-[#FF8660] focus:border-[#FF8660] text-lg"
              />
              <InputOTPSlot
                index={5}
                className="w-12 h-14 bg-[#232526] border-[#444] hover:border-[#FF8660] focus:border-[#FF8660] text-lg"
              />
            </InputOTPGroup>
          </InputOTP>

          <div className="flex justify-end">
            <button
              type="button"
              className="text-sm text-[#FF8660] hover:text-white transition-colors duration-300 flex items-center"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
                fill="currentColor"
                className="w-4 h-4 mr-1"
              >
                <path
                  fillRule="evenodd"
                  d="M15.312 11.424a5.5 5.5 0 01-9.201 2.466l-.312-.311h2.433a.75.75 0 000-1.5H3.989a.75.75 0 00-.75.75v4.242a.75.75 0 001.5 0v-2.43l.31.31a7 7 0 0011.712-3.138.75.75 0 00-1.449-.39zm1.23-3.723a.75.75 0 00.219-.53V2.929a.75.75 0 00-1.5 0V5.36l-.31-.31A7 7 0 003.239 8.188a.75.75 0 101.448.389A5.5 5.5 0 0113.89 6.11l.311.31h-2.432a.75.75 0 000 1.5h4.243a.75.75 0 00.53-.219z"
                  clipRule="evenodd"
                />
              </svg>
              Resend OTP
            </button>
          </div>
        </div>

        {/* Submit Button */}
        <Button
          type="submit"
          className="w-full h-12 text-base font-semibold bg-[#FF8660] text-white hover:bg-[#D5491D] transition-all duration-300 rounded-lg shadow-lg border border-[#FF8660] hover:border-[#D5491D]"
        >
          Login to Dashboard
        </Button>

        {/* Security Notice */}
        <div className="text-center text-sm text-gray-400">
          <p className="flex items-center justify-center">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
              fill="currentColor"
              className="w-4 h-4 mr-1"
            >
              <path
                fillRule="evenodd"
                d="M10 1a4.5 4.5 0 00-4.5 4.5V9H5a2 2 0 00-2 2v6a2 2 0 002 2h10a2 2 0 002-2v-6a2 2 0 00-2-2h-.5V5.5A4.5 4.5 0 0010 1zm3 8V5.5a3 3 0 10-6 0V9h6z"
                clipRule="evenodd"
              />
            </svg>
            Secure Authentication | Admin Only
          </p>
        </div>
      </div>
    </form>
  );
};

export default AuthComponent;
