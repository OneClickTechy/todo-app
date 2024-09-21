/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      backgroundImage: {
        'task': "url('./src/assets/bg-task.svg')", // define the custom image name 'task'
      },
    },
  },
  plugins: [],
};
