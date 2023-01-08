import { defineConfig, configDefaults } from 'vitest/config'
import { wasm } from '@rollup/plugin-wasm';

export default defineConfig({
  plugins: [ wasm() ],
  test: {
    exclude: [...configDefaults.exclude],
  }
})