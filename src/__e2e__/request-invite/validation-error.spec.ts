import { test, expect } from '@playwright/test';

test.beforeEach(async ({ page, baseURL }) => {
  await page.goto(baseURL!);
});

test('Should show all validation errors if submitting before fields are filled', async ({
  page,
}) => {
  await page.getByRole('button', { name: 'Request an invite' }).click();
  await page.getByRole('button', { name: 'Send' }).click();
  await expect(page.locator('[id="\\:r19\\:-form-message"]')).toContainText(
    'Full name is too short',
  );
  await expect(page.locator('#request-invite-form')).toContainText('Invalid email provided');
  await expect(page.locator('#request-invite-form')).toContainText('Invalid email provided');
});

test('Should show all "full name too short" error if filled name is under 3 characters', async ({
  page,
}) => {
  await page.getByRole('button', { name: 'Request an invite' }).click();
  await page.locator('input[name="name"]').fill('aa');
  await page.getByRole('button', { name: 'Send' }).click();
  await page.getByText('Full name is too short').click();
});

test('Should show all "invalid email" errors if filled emails are invalid', async ({ page }) => {
  await page.getByRole('button', { name: 'Request an invite' }).click();
  await page.locator('input[name="name"]').fill('Bob Loblaw');
  await page.locator('input[name="email"]').click();
  await page.locator('input[name="email"]').fill('bob');
  await page.locator('input[name="confirmEmail"]').click();
  await page.locator('input[name="confirmEmail"]').fill('alice');
  await page.getByRole('button', { name: 'Send' }).click();
  await expect(page.locator('#request-invite-form')).toContainText('Invalid email provided');
  await expect(page.locator('#request-invite-form')).toContainText('Invalid email provided');
});

test('Should show "emails do not match" error', async ({ page }) => {
  await page.getByRole('button', { name: 'Request an invite' }).click();
  await page.locator('input[name="name"]').click();
  await page.locator('input[name="name"]').fill('Bob Loblaw');
  await page.locator('input[name="email"]').click();
  await page.locator('input[name="email"]').fill('bob.loblaw@airwallex.com');
  await page.locator('input[name="confirmEmail"]').click();
  await page.locator('input[name="confirmEmail"]').fill('bob.loblaw@gmail.com');
  await page.getByRole('button', { name: 'Send' }).click();
  await expect(page.locator('#request-invite-form')).toContainText('Emails do not match');
});
