import { Button } from '@/components/ui/button';
import { CardTitle } from '@/components/ui/card';
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
    <form className="Auth_Component w-full   mx-auto bg-gradient-to-br from-[#232526] via-[#1E1E1E] to-[#232526] rounded-2xl p-8 md:p-10 text-white shadow-2xl space-y-8">
      {/* Heading */}
      <div className="mb-2 text-center">
        <CardTitle className="text-3xl md:text-4xl font-extrabold text-[#FF8660] mb-2 font-[var(--font-plus-jakarta-sans)]">
          Admin Login
        </CardTitle>
        <p className="text-base md:text-lg text-[#C5C5C5]">
          Please enter your registered admin email and the 6-digit OTP sent to
          your inbox to securely access the dashboard.
        </p>
      </div>
      {/* Email Field */}
      <div className="flex flex-col space-y-2 gap-2">
        <Label className="text-lg md:text-xl font-medium">Admin Email</Label>
        <Input
          type="email"
          className="h-12 bg-[#232526] border border-[#444] rounded-lg px-4 text-white text-base placeholder:text-[#888]"
          placeholder="Enter your admin email"
        />
      </div>
      {/* OTP Field */}
      <div className="flex flex-col space-y-2 gap-2">
        <Label className="text-lg md:text-xl font-medium mb-2">OTP</Label>
        <InputOTP
          maxLength={6}
          className="Otp_Container w-full flex justify-center gap-2"
        >
          <InputOTPGroup className="flex gap-2">
            <InputOTPSlot index={0} className="w-[3.8rem]" />
            <InputOTPSlot index={1} className="w-[3.8rem]" />
            <InputOTPSlot index={2} className="w-[3.8rem]" />
          </InputOTPGroup>
          <InputOTPSeparator />
          <InputOTPGroup className="flex gap-2">
            <InputOTPSlot index={3} className="w-[3.8rem]" />
            <InputOTPSlot index={4} className="w-[3.8rem]" />
            <InputOTPSlot index={5} className="w-[3.8rem]" />
          </InputOTPGroup>
        </InputOTP>
        <span className="text-sm text-[#FF8660] mt-2 text-right">
          Didn't receive OTP?{' '}
          <button
            type="button"
            className="underline hover:text-white transition"
          >
            Resend
          </button>
        </span>
      </div>
      {/* Submit Button */}
      <div className="pt-2 mt-[5vh]">
        <Button
          type="submit"
          className="w-full h-12 text-base font-semibold bg-[#FF8660] text-white hover:bg-[#D5491D] transition rounded-lg shadow-lg"
        >
          Login to Dashboard
        </Button>
      </div>
    </form>
  );
};

export default AuthComponent;
