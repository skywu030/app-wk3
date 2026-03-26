module.exports = function (api) {
  api.cache(true);
  return {
    presets: ['babel-preset-expo'],
    plugins: [
      'react-native-reanimated/plugin', // ⚠️ 注意：這行一定要放在最後面！
    ],
  };
};