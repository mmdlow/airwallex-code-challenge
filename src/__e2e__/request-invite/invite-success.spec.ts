import { test, expect } from '@playwright/test';

test.beforeEach(async ({ page, baseURL }) => {
  await page.goto(baseURL!);
});

test('Should request an invite successfully with valid input', async ({ page }) => {
  await expect(page.locator('section')).toContainText('A better way');
  await expect(page.locator('section')).toContainText('to enjoy everyday.');
  await page.getByRole('button', { name: 'Request an invite' }).click();
  await expect(page.locator('input[name="name"]')).toBeVisible();
  await expect(page.locator('input[name="email"]')).toBeVisible();
  await expect(page.locator('input[name="confirmEmail"]')).toBeVisible();
  await page.locator('input[name="name"]').click();
  await page.locator('input[name="name"]').fill('Bob Loblaw');
  await page.locator('input[name="email"]').click();
  await page.locator('input[name="email"]').fill('bob.loblaw@gmail.com');
  await page.locator('input[name="confirmEmail"]').click();
  await page.locator('input[name="confirmEmail"]').fill('bob.loblaw@gmail.com');
  await page.getByRole('button', { name: 'Send' }).click();
  await expect(page.getByLabel('Request successful notice')).toContainText('All done!');
  await page.getByRole('button', { name: 'Close' }).click();
});
