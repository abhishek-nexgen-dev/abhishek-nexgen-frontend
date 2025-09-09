'use client';

import React from 'react';
import Link from 'next/link';
import DarkVeil from '@/components/DarkVeil';
import { motion } from 'framer-motion';

export default function NotFound() {
  return (
    <div className="relative h-screen w-screen flex flex-col items-center justify-center p-4 overflow-hidden">
      {/* Position DarkVeil as full background */}
      <div className="absolute inset-0 z-0">
        <DarkVeil speed={1} resolutionScale={1} />
      </div>

      {/* Content with higher z-index to appear above the DarkVeil */}
      <div className="relative z-10 flex flex-col items-center justify-center w-full">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center"
        >
          <h1 className="text-[10rem] font-bold text-[#FF8660] leading-none">
            404
          </h1>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3, duration: 0.8 }}
          className="text-center max-w-lg"
        >
          <h2 className="text-3xl font-bold text-white mb-4">Page Not Found</h2>
          <p className="text-lg text-gray-300 mb-8">
            Page Not Found. The page you requested could not be found. Please
            check the URL or return to the homepage.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <button
              onClick={() => window.history.back()}
              className="px-8 py-3 bg-transparent border border-white text-white font-medium rounded-lg hover:bg-white/10 transition-all duration-300"
            >
              Go Back
            </button>
          </div>
        </motion.div>
      </div>

      {/* Decorative Elements */}
      <div className="absolute bottom-10 left-0 w-full flex justify-center opacity-30 z-10">
        <div className="grid grid-cols-12 gap-2">
          {[...Array(12)].map((_, i) => (
            <div
              key={i}
              className="h-1 w-full bg-[#FF8660]"
              style={{
                animationDelay: `${i * 0.1}s`,
                animation: 'pulse 1.5s infinite ease-in-out',
              }}
            />
          ))}
        </div>
      </div>

      <style jsx>{`
        @keyframes pulse {
          0%,
          100% {
            opacity: 0.3;
          }
          50% {
            opacity: 0.8;
          }
        }
      `}</style>
    </div>
  );
}
