module.exports = {
  printWidth: 80,
  proseWrap: "always",
  overrides: [
    {
      files: "*.js",
      options: {
        semi: false,
        trailingComma: "es5",
      },
    },
    {
      files: "*.md",
      options: {
        proseWrap: "always",
      },
    },
    {
      files: "*.html",
      options: {
        htmlWhitespaceSensitivity: "css",
      },
    },
  ],
}
