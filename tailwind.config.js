/** @type {import('tailwindcss').Config} */

export default {
  content: [
    './src/**/*.{html,js,svelte,ts}',
    "./node_modules/flowbite/**/*.js"
  ],
  theme: {
    colors: {
        text: '#ffffff',
        subtext2: '#f1f2f3',
        subtext1: '#d8dbde',
        subtext0: '#c2c6cb',
        overlay2: '#acb2b8',
        overlay1: '#969da5',
        overlay0: '#808992',
        surface2: '#6c757d',
        surface1: '#596167',
        surface0: '#464c51',
        base: '#33373b',
        crust: '#202325',
        mantle: '#0d0e0f'
    },
    extend: {},
  },
  plugins: [
    require('flowbite-typography'),
    require('flowbite/plugin')({
      wysiwyg: true,
    }),
  ],
}
