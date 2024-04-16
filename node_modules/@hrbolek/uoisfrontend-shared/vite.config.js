/* eslint-disable no-undef */
import { defineConfig } from 'vite'
import { resolve } from 'path'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
// export default defineConfig({
//   plugins: [react()],
//   build: {
//        lib: {
//           name: "shared",
//           entry: resolve(__dirname, 'lib/index.js'),
//           // entry: __dirname + '/lib/index.js',
//           formats: ['es', 'umd']
//        }
//     }  
// })


export default defineConfig({
  plugins: [react()],

  server: {
    proxy: {
      // string shorthand: http://localhost:5173/foo -> http://localhost:4567/foo
      '/api/gql': 'http://localhost:33001',
    },  
  },

  build: {
    lib: {
      // Could also be a dictionary or array of multiple entry points
      entry: resolve(__dirname, 'src/index.js'),
      name: 'Shared',
      // the proper extensions will be added
      fileName: (format, name) => `${format}/${name}.js`,
      // formats: ['es', 'umd', 'iife']
      formats: ['es', 'umd']
    },
    rollupOptions: {
      // make sure to externalize deps that shouldn't be bundled
      // into your library
      // external: ['react', 'react-dom', 'react-bootstrap', '@reduxjs/toolkit'],

      // '@reduxjs/toolkit' se nedari da jako externi
      // external: ['react', 'react-dom', 'react-bootstrap', '@reduxjs/toolkit'],
      external: ['react', 'react-dom', '@reduxjs/toolkit'],
      output: {
        // Provide global variables to use in the UMD build
        // for externalized deps
        globals: {
          react: 'React',
          "react-dom": 'ReactDOM',
          "@reduxjs/toolkit": "RTK",
          // "react-bootstrap": "ReactBootstrap",
          // "process": 'JSON.parse("{env:{Node_ENV: ""}}")'
        },
      },
    },
  },
})