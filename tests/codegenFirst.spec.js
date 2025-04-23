import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('https://devdemo.wavebid.com/next/login');
  await page.getByTestId('username').click();
  await page.getByTestId('username').fill('mehul.r@simformsolutions.com');
  await page.getByTestId('username').press('Tab');
  await page.getByTestId('password').fill('Jadeja@123');
  await page.getByTestId('loginButton').click();
  await page.getByRole('textbox', { name: 'Search input' }).click();
  await page.getByRole('textbox', { name: 'Search input' }).fill('WBPR');
  await page.getByRole('link', { name: 'M-WBPR-2088-01 Draft Last' }).click();
  await page.getByTestId('add-lot-icon-toolbar-btn').click();
  await page.getByRole('button', { name: 'Plus Circle Single item Add' }).click();
  await page.getByTestId('lotBasics-number').fill('101');
  await page.getByTestId('lotBasics-number').press('Tab');
  await page.getByTestId('lotBasics-title').fill('Lot One zero One');
  await page.getByTestId('lotBasics-description').click();
  await page.getByTestId('lotBasics-description').fill('Test');
  await page.getByTestId('header-lot-save').click();
  await page.getByTestId('edit-lot-form').getByTestId('backButton').click();
  await page.getByTestId('edit-catalog-icon-toolbar-btn').click();
  await page.getByRole('row', { name: 'Dots Six Vertical 101 Lot One' }).locator('label').getByRole('img').click();
  await page.getByTestId('bulk-delete-lots-btn').click();
  await page.getByTestId('confirm-delete-lots').click();
  await page.getByTestId('close-edit-catalog-btn').click();
  await page.getByTestId('avatar').getByRole('heading', { name: 'M' }).click();
  await page.getByText('Log out').click();
});