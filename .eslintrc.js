module.exports = {
  extends: ['react-app', 'airbnb', 'airbnb/hooks', 'plugin:testing-library/react'],
  plugins: ['jest', 'testing-library'],
  env: {
    'jest/globals': true,
    browser: true,
  },
  ignorePatterns: ['src/setupTests.js'],
};
