module.exports = {
  extends: ['react-app', 'airbnb', 'airbnb/hooks'],
  plugins: ['jest'],
  env: {
    'jest/globals': true,
    browser: true,
  },
  ignorePatterns: ['src/setupTests.js'],
};
