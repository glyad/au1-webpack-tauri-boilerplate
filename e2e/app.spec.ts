import { test, expect } from '@playwright/test';

test.beforeEach(async ({ page }) => {
  await page.goto('http://localhost:8080');
});

test.describe('app', () => {
  test('shows message', async ({ page }) => {
    await expect(page.getByText('Welcome to Tauri with old good Aurelia v.1!')).toBeDefined();
  });
});
