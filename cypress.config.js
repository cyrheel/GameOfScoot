import cypress from "cypress";

const { defineConfig } = cypress;

export default defineConfig({
  e2e: {
    setupNodeEvents(on, config) {},
    video: false,
    screenshotOnRunFailure: false,
  },
});
