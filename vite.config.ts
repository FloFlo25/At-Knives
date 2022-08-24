import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import tsconfigPaths from 'vite-tsconfig-paths';


export default defineConfig(({ command }) => {
  if (command === 'build') return {
    base: '/',
    plugins: [react(), tsconfigPaths()],
  }
  else return {
    base: '/At-Knives/',
    plugins: [react(), tsconfigPaths()],
  }
})


// // https://vitejs.dev/config/
// export default defineConfig({
//   base: '/',
//   plugins: [react(), tsconfigPaths()],
// });
