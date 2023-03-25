import { defineConfig, loadEnv } from 'vite'
import vue from '@vitejs/plugin-vue'

// https://vitejs.dev/config/


export default defineConfig(({ command, mode }) => {
  loadEnv(mode, process.cwd())
  return {
    plugins: [vue()], define: {
      'process.env': {}
    }
  }
})
