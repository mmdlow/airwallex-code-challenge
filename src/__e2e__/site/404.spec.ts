import { test, expect } from '@playwright/test';

test('Should navigate to the 404 page', async ({ page }) => {
  await page.goto('./asdf');
  await expect(page.locator('section')).toContainText('Oops!');
  await expect(page.locator('h2')).toContainText('The requested page could not be found.');
  await page.getByRole('link', { name: 'Take me home' }).click();
  await expect(page.locator('section')).toContainText('A better way');
  await expect(page.locator('section')).toContainText('to enjoy everyday.');
});
