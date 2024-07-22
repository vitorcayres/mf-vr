module.exports = {
  testEnvironment: "jsdom",
  transformIgnorePatterns: ["node_modules/(?!react-modern-drawer)/"],
  transform: {
    "^.+\\.(js|jsx|ts|tsx)$": "babel-jest",
  },
  moduleNameMapper: {
    "\\.(css|less)$": "identity-obj-proxy",
  },
  setupFilesAfterEnv: ["@testing-library/jest-dom"],
};
