
    module.exports = {
      content: [
        "./src/**/*.{html,js,jsx,ts,tsx}",
      ],
      theme: {
        extend: {
          fontFamily: {
            'body': ['YourFontName', 'sans-serif'], // For Google Fonts example
            'custom': ['MyCustomFont', 'serif'], // For Local Fonts example
          },
        },
      },
      plugins: [],
    };