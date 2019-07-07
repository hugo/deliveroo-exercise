module.exports = {
  printWidth: 80,
  overrides: [
    {
      files: "*.js",
      rules: {
        semi: false
      }
    },
    {
      files: "*.md",
      rules: {
        proseWrap: "always"
      }
    }
  ]
};
