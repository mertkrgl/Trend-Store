// jest.config.js
module.exports = {
 
  testEnvironment: 'jsdom',
  moduleNameMapper: {
    '^.+\\.css$': 'jest-css-modules-transform',
  },
};
