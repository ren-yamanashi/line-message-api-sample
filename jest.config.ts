export default {
  moduleFileExtensions: ['js', 'json', 'jsx', 'ts', 'tsx', 'node'],
  testMatch: ['<rootDir>/src/__test__/**/*.spec.ts'],
  testPathIgnorePatterns: [],
  transform: {
    // "\\.[jt]sx?$": "babel-jest",
    '^.+\\.tsx?$': 'ts-jest',
  },
  transformIgnorePatterns: ['/node_modules/'],
};
