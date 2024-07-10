module.exports = {
  presets: ['module:@react-native/babel-preset'],
  plugins: [
    'nativewind/babel',
    [
      'module-resolver',
      {
        root: ['./src'],
        alias: {
          '@store': './src/store',
          '@components': './src/components',
          '@src': './src',
        },
      },
    ],
  ],
};
