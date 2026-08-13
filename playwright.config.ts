import { defineConfig, devices } from '@playwright/test';

export default defineConfig({
  testDir: './tests',
  timeout: 30_000,
  retries: 0,
  reporter: [['list']],
  use: {
    baseURL: 'http://localhost:4321',
    headless: true,
    trace: 'off',
  },
  projects: [
    {
      name: 'chromium',
      use: { ...devices['Desktop Chrome'] },
    },
  ],
  webServer: {
    // `astro dev`, not `astro preview`. Preview serves the prebuilt, gitignored
    // dist/ folder, so it only reflects src/ after a manual `npm run build` —
    // and nothing warns you when you forget, so the suite can silently pass
    // against stale output. The dev server always compiles from live source.
    command: 'npm run dev -- --port 4321',
    url: 'http://localhost:4321',
    // Astro 7 auto-detects an AI-agent environment and daemonizes `astro dev`
    // there, which makes the spawned command exit immediately — Playwright then
    // reports "Process from config.webServer exited early" and no tests run. In
    // a normal terminal it already runs in the foreground; setting this pins
    // that behaviour everywhere. Any non-empty value disables the auto-detect,
    // and '0' also reads correctly if Astro ever makes the var value-based.
    env: { ASTRO_DEV_BACKGROUND: '0' },
    // false, deliberately. `true` would attach to whatever already holds :4321,
    // and historically that has been an `astro preview` process serving stale
    // dist/ — reintroducing the exact bug this block exists to prevent. With
    // false, the suite always starts its own dev server, and a port clash fails
    // loudly instead of quietly testing the wrong build.
    reuseExistingServer: false,
    // Cold Vite dependency optimization on Windows is the slow path here; a
    // warm start is ~1s. 120s leaves room for the cold case without hanging
    // indefinitely on a server that is never coming up.
    timeout: 120_000,
  },
});
