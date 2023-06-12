/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        sans: "Open Sans",
      },
      boxShadow: {
        "shadow-1":
          "inset 1px 0 0 #dadce0, inset -1px 0 0 #dadce0, 0 1px 2px 0 rgba(60,64,67,.3), 0 1px 3px 1px rgba(60,64,67,.15)",
      },

      "@layer utilities": {
        ".empty-cells-show": {
          "empty-cells": "show",
        },
        "drag-none": {
          "user-drag": "none",
        },
      },
    },
  },
  plugins: [],
};
