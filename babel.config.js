// Fichier: babel.config.js
module.exports = function (api) {
  api.cache(true);
  return {
    presets: ["babel-preset-expo"],
    // Cette ligne est la SEULE configuration que nous ajoutons.
    // Elle active les animations avancées pour le BottomSheet.
    plugins: ["react-native-reanimated/plugin"],
  };
};