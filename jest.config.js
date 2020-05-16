module.exports = {
  preset: "ts-jest",
  testEnvironment: "jsdom",
  moduleFileExtensions: ["ts", "tsx", "js"],
  moduleNameMapper: {
    "\\.(css|less)$": "<rootDir>/__mocks__/styleMock.js",
    "^components(.*)$": "<rootDir>/src/components$1"
  },
  transform: {
    '^.+\\.tsx?$': 'ts-jest',
  },
  testMatch: ["**/__tests__/*.(ts|tsx)"],
  setupFilesAfterEnv: ["./jest.setup.js"],
  testPathIgnorePatterns: ["./.next/", "./node_modules/"],
  globals: {
    "ts-jest": {
      tsConfig: "tsconfig.jest.json"
    }
  }
};