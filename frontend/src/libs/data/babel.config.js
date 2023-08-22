module.exports = function (api) {
  api.cache(true);
  return {
    presets: ['babel-preset-expo'],
    plugins: [
      ['module:react-native-dotenv'],
      [
        'module-resolver',
        {
          alias: {
            '@inheartive-assets': '../../../assets/index.ts',
            '@inheartive-data': '../../../libs/data/index.ts',
            '@inheartive-atoms': '../../../libs/ui/atoms/index.ts',
            '@inheartive-molecules': '../../../libs/ui/molecules/index.ts',
            '@inheartive-organisms': '../../../libs/ui/organisms/index.ts',
            '@inheartive-testing': '../../../libs/ui/testing/index.ts',
            '@inheartive-theme': '../../../libs/ui/theme/index.ts',
            '@inheartive-shared-utils': '../../../libs/ui/shared/utils.ts',
          },
        },
      ],
    ],
  };
};
