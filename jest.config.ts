import type { Config } from 'jest';

const config: Config = {
  clearMocks: true,
  collectCoverage: true,
  coverageDirectory: 'coverage',
  testEnvironment: 'jsdom',

  // Scan for test files
  testMatch: ['**/__tests__/**/*.[jt]s?(x)', '**/?(*.)+(spec|test).[jt]s?(x)'],

  // Ignore node_modules and .next build output
  testPathIgnorePatterns: ['/node_modules/', '/.next/'],

  // Transform TypeScript and JavaScript files using ts-jest
  transform: {
    '^.+\\.(ts|tsx)$': 'ts-jest',
    '^.+\\.(js|jsx)$': 'babel-jest',
  },

  // Ignore transformation for node_modules
  transformIgnorePatterns: ['/node_modules/', '\\.pnp\\.[^\\/]+$'],

  // Handle static assets (images, styles, etc.)
  moduleNameMapper: {
    '^@/(.*)$': '<rootDir>/src/$1',
    '\\.(css|less|scss|sass)$': 'identity-obj-proxy',
    '\\.(jpg|jpeg|png|gif|webp|svg)$': '<rootDir>/__mocks__/fileMock.js',
  },

  // Support Next.js absolute imports
  moduleDirectories: ['node_modules', '<rootDir>/'],

  // Support these file extensions
  moduleFileExtensions: ['js', 'jsx', 'ts', 'tsx', 'json'],

  // Setup files after environment (for React Testing Library, etc.)
  setupFilesAfterEnv: ['<rootDir>/jest.setup.ts'],
};

export default config;
