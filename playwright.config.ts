import { defineConfig } from "@playwright/test";

export default defineConfig({
  testDir: "./src/tests", // your test folder
  timeout: 60000,         // 60 seconds timeout per test
  retries: 0,             // no retries by default
  use: {
    ignoreHTTPSErrors: true,  // ✅ ignore SSL certificate issues
    baseURL: "https://crudcrud.com", // optional (helps relative requests)
    extraHTTPHeaders: {
      "Content-Type": "application/json",
    },
  },
  reporter: [["list"], ["html", { outputFolder: "report", open: "never" }]],
  expect: {
    timeout: 5000,
  },
});
