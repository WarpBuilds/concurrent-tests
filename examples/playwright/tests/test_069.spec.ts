import { test, expect } from '@playwright/test';

test('has title', async ({ page }) => {
    await page.goto('https://warpbuild.com/');

    // Manual wait to make the tests last longer.
    await page.waitForTimeout(5000);

    // Expect a title "to contain" a substring.
    await expect(page).toHaveTitle(/WarpBuild/);
});

test('get started link', async ({ page }) => {
    await page.goto('https://warpbuild.com/');

    // Click the get started link.
    const newPagePromise = page.context().waitForEvent('page');
    await page.getByRole('link', { name: 'Get Started', exact: true }).click();
    const newPage = await newPagePromise;

    // Expect a new page to be opened.
    await expect(newPage).toHaveURL(/app\.warpbuild\.com/);
    await expect(newPage.getByRole('link', { name: 'Sign in with GitHub', exact: true })).toBeVisible({ timeout: 10000 });
});
