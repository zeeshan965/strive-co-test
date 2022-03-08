module.exports = {
  content: [
      "./resources/**/*.blade.php",
      "./resources/**/*.tsx",
  ],
  theme: {
    extend: {},
  },
  plugins: [
      require('@tailwindcss/typography'),
      require('@tailwindcss/forms')({
          strategy: 'class'
      }),
  ],
}
