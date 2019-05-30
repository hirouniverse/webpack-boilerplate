module.exports = {
  setupFiles: [
    '<rootDir>/src/__test__/setup/setupTest.js'
  ],
  moduleNameMapper: {
    '@': '<rootDir>/src/$1',
  },
  moduleDirectories: [
    'node_modules',
  ],
  transform: {
    '^.+\\.[jt]sx?$': require.resolve('babel-jest'),
  },
};