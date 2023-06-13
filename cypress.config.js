import cypress from "cypress";

const { defineConfig } = cypress;

export default defineConfig({
  e2e: {
    video: false,
    screenshotOnRunFailure: false,
  },
});
