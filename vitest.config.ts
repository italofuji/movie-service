import { defineConfig } from 'vitest/config'

export default defineConfig({
  test: {
    globals: true,
    passWithNoTests: true,
    include: ["./tests/**/*.test.ts"],
    environment: 'node',
    coverage: {
      reporter: "lcov",
    }
  },
})
