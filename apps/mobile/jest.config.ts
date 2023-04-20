module.exports = {
  displayName: 'mobile',
  preset: 'react-native',
  resolver: '@nrwl/jest/plugins/resolver',
  moduleFileExtensions: ['ts', 'js', 'html', 'tsx', 'jsx'],
  transformIgnorePatterns: ['node_modules/(?!react-native|react-router-native)/'],
  setupFilesAfterEnv: ['<rootDir>/test-setup.ts'],
};
