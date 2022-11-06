module.exports = function babel(api) {
  api.cache(true);
  return {
    presets: ['babel-preset-expo', 'module:metro-react-native-babel-preset'],
    plugins: [
      'inline-dotenv',
      [
        '@babel/plugin-proposal-decorators',
        {
          legacy: true,
        },
      ],
    ],
  };
};
