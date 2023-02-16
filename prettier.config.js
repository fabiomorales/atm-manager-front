module.exports = {
  singleQuote: true,
  printWidth: 120,
  overrides: [
    {
      files: ['*.yml', '*.yaml'],
      options: {
        singleQuote: false,
      },
    },
  ],
};
