import { test, expect } from '@playwright/test';

test.beforeEach(async ({ context }) => {
  // Block any css requests for each test in this file.
  await context.route(/fake-auth$/, route => route.abort());
});

test('Should show error callout on network errors', async ({ page, baseURL }) => {
  await page.goto(baseURL!);
  await page.getByRole('button', { name: 'Request an invite' }).click();
  await page.locator('input[name="name"]').fill('Bob Loblaw');
  await page.locator('input[name="email"]').click();
  await page.locator('input[name="email"]').fill('bob.loblaw@gmail.com');
  await page.locator('input[name="email"]').press('Tab');
  await page.locator('input[name="confirmEmail"]').fill('bob.loblaw@gmail.com');
  await page.getByRole('button', { name: 'Send' }).click();
  await expect(page.locator('#request-invite-form')).toContainText(/Network Error/i);
});
