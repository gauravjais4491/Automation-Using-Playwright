const { test } = require('@playwright/test');
const { PageUrl } = require('../PageUrl/PageUrl.js')
// const {ByPassCapcha} = require('playwright-stealth')
test.only('should subscibe to the shopify website', async ({ page }) => {
    const pageUrl = new PageUrl(page)

    await pageUrl.goto()
    // await page.locator('[type="email"]').click()
    await page.getByRole('link', { name: 'Contact' }).click()
    await page.getByPlaceholder('Name').fill('Gaurav')
    await page.locator('#ContactForm-email').fill('Gaurav2@example.com')
    await page.getByPlaceholder('Phone number').fill('1234567890')
    await page.getByPlaceholder('Comment').fill('Hi, I am Gaurav Kumar Jaiswal')
    await page.getByRole('button', { name: "Send" }).click()
    await page.pause()
})