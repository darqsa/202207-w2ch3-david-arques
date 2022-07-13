module.exports = {
  env: {
    es2021: true,
    browser: true,
    jest: true,
  },
  extends: ["airbnb-base", "prettier"],
  parserOptions: {
    ecmaVersion: "latest",
  },
  rules: {
    "no-plusplus": "off",
    "no-restricted-syntax": "off",
    "no-console": "off",
    "no-alert": "off",
  },
};
