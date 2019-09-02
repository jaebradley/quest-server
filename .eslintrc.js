module.exports = {
  "settings": {
    "import/resolver": {
      "webpack": {
        "config": './webpack/base.config.js',
      }
    },
  },
  "extends": "eslint-config-airbnb-base",
  "env": {
    "jest": true,
    "node": true,
  },
  "parser": "babel-eslint",
}
