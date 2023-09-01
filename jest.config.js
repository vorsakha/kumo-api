module.exports = {
  preset: "ts-jest",
  testEnvironment: "node",
  extensionsToTreatAsEsm: [".ts"],
  transform: {
    "^.+\\.ts$": "ts-jest",
  },
  testMatch: ["**/*.test.ts"],
  moduleNameMapper: {
    "@/(.*)": "<rootDir>/src/$1",
    "@modules/(.*)": "<rootDir>/src/modules/$1",
    "@utils/(.*)": "<rootDir>/src/utils/$1",
    "@exceptions/(.*)": "<rootDir>/src/exceptions/$1",
    "@config/(.*)": "<rootDir>/src/config/$1",
    "@docs/(.*)": "<rootDir>/src/docs/$1",
  },
};
