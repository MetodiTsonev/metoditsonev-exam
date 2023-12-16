const { test, expect } = require('@playwright/test');

test('Check add products page', async ({ page }) => {
    await page.goto('https://metoditsonev-exam.onrender.com/add-to-shopping-list');
    const form = await page.$('input');
    expect(form).toBeNull;
  });
  