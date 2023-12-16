const { test, expect } = require('@playwright/test');

test('Check shopping list page', async ({ page }) => {
    await page.goto('https://metoditsonev-exam.onrender.com/shopping-list');
    const list = await page.$('dl');
    expect(list).toBeNull();
  });
  