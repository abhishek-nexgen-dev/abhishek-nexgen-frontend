// jest.setup.ts

// Import custom matchers from jest-dom
import '@testing-library/jest-dom/extend-expect'; // Adds custom matchers to Jest

// Global mocks (optional, if you need to mock things globally)
globalThis.matchMedia =
  globalThis.matchMedia ||
  (() => ({
    matches: false,
    addListener: jest.fn(),
    removeListener: jest.fn(),
  }));
