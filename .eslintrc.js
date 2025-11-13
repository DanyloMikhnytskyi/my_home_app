module.exports = {
  overrides: [
    {
      files: ["src/components/ui/**/*.{ts,tsx}", "vite.config.ts"],
      rules: {
        "import/no-default-export": "off",
      },
    },
  ],
};
