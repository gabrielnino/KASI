import { defineConfig, devices } from '@playwright/test';

export default defineConfig({
  testDir: './tests/e2e',
  fullyParallel: false,
  forbidOnly: !!process.env.CI,
  retries: 0,
  workers: 1,
  reporter: 'list',
  use: {
    baseURL: 'http://localhost:4322',
    trace: 'on-first-retry',
  },
  projects: [
    {
      name: 'chromium',
      use: { ...devices['Desktop Chrome'] },
    },
    {
      name: 'webkit',
      use: { ...devices['iPhone 12'] },
    },
    {
      name: 'android',
      use: { ...devices['Pixel 5'] },
    },
  ],
  webServer: {
    command: 'npx astro dev --port 4322',
    url: 'http://localhost:4322',
    reuseExistingServer: true,
    stdout: 'ignore',
    stderr: 'pipe',
  },
});
