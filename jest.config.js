const path = require('path');

module.exports = {
  preset: 'react-native',
  setupFilesAfterEnv: [
    '@testing-library/jest-native/extend-expect',
    './jest.setup.ts',
  ],
  clearMocks: true,
  moduleDirectories: ['node_modules', path.join(__dirname, 'src')],
  transform: {},
};
