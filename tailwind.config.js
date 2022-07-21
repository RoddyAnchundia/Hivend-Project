/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}","/**/*.{html,js}"],
  theme: {
    fontFamily: {
      'nav' : ['Montserrat', 'sans-serif'],
      'image' : ['Overpass', 'sans-serif']
    },
    extend: {
      backgroundImage: {
        'body' : "url('./images/bg.jpeg')",
        'secondImage1' : "url('images/seconBox.jpeg')",
        'secondImage2' : "url('images/secondBox2.jpeg')",
        'secondImage3' : "url('images/secondBox3.jpeg')",
      },
      spacing: {
        'slide': '550px',
        'secondBox' : '400px',
        'imagew' : '300px',
        'footer' : '200px',
        'newsW' : '380px',
        'newsH' : '250px',
        'medioW' : '450px',
        'medioH' : '695px',
      }
    },
  },
  plugins: [],
}