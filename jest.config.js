module.exports = {
  moduleNameMapper: {
    '@': '<rootDir>/src/$1',
  },
  moduleDirectories: [
    'node_modules',
  ],
  transform: {
    '^.+\\.[jt]sx?$': require.resolve('babel-jest')
  },
};