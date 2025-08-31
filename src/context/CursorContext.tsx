'use client';
import React, { createContext, useContext, RefObject, useRef } from 'react';

type CursorContextType = {
  cursorRef: RefObject<HTMLDivElement | null>;
};

const CursorContext = createContext<CursorContextType | null>(null);

export const useCursor = () => {
  const context = useContext(CursorContext);
  if (!context) {
    throw new Error('useCursor must be used within CursorProvider');
  }
  return context;
};

export const CursorProvider = ({ children }: { children: React.ReactNode }) => {
  const cursorRef = useRef<HTMLDivElement>(null);

  return (
    <CursorContext.Provider value={{ cursorRef }}>
      {children}
    </CursorContext.Provider>
  );
};
