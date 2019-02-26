module.exports = {
  testEnvironment: 'node',
  coverageReporters: [
    'json',
    'lcov',
    'text',
    'text-summary',
  ],
  collectCoverageFrom: [
    'src/**/*.js',
  ],
  coverageThreshold: {
    global: {
      branches: 95,
      functions: 95,
      lines: 95,
      statements: 95,
    },
  },
  setupFiles: [
    './test-setup.js',
  ],
};
