// @ts-check
const { test, expect } = require('@playwright/test');

test('has title', async ({ page }) => {
  await page.goto('https://playwright.dev/');

  // Expect a title "to contain" a substring.
  await expect(page).toHaveTitle(/Playwright/);
});

test('get started link', async ({ page }) => {
  await page.goto('https://playwright.dev/');

  // Click the get started link.
  await page.getByRole('link', { name: 'Get started' }).click();

  // Expects page to have a heading with the name of Installation.
  await expect(page.getByRole('heading', { name: 'Installation' })).toBeVisible();
});

test.only('@Client App login', async ({ page }) => {
  //js file- Login js, DashboardPage
  const email = "anshika@gmail.com";
  const productName = 'zara coat 3';
  const products = page.locator(".card-body");
  await page.goto("https://rahulshettyacademy.com/client");
  await page.locator("#userEmail").fill(email);
  await page.locator("#userPassword").type("Iamking@000");
  await page.locator("[value='Login']").click();
  await page.waitForLoadState('networkidle');
  const titles = await page.locator(".card-body b").allTextContents();
  console.log(titles);
  const count = await products.count();
  for (let i = 0; i < count; ++i) {
    if (await products.nth(i).locator("b").textContent() === productName) {
      //add to cart
      await products.nth(i).locator("text= Add To Cart").click();
      break;
    }
  }

  await page.locator("[routerlink*='cart']").click();
  //await page.pause();

  await page.locator("div li").first().waitFor();
  const bool = await page.locator("h3:has-text('zara coat 3')").isVisible();
  expect(bool).toBeTruthy();
  await page.locator("text=Checkout").click();

  await page.locator("[placeholder*='Country']").type("ind");

  const dropdown = page.locator(".ta-results");
  await dropdown.waitFor();
  const optionsCount = await dropdown.locator("button").count();
  for (let i = 0; i < optionsCount; ++i) {
    const text = await dropdown.locator("button").nth(i).textContent();
    if (text === " India") {
      await dropdown.locator("button").nth(i).click();
      break;
    }
  }

  expect(page.locator(".user__name [type='text']").first()).toHaveText(email);
  await page.locator(".action__submit").click();
  await expect(page.locator(".hero-primary")).toHaveText(" Thankyou for the order. ");
  const orderId = await page.locator(".em-spacer-1 .ng-star-inserted").textContent();
  console.log(orderId);

  await page.locator('button[routerlink="/dashboard/myorders"]').click()
  const rows = page.locator('tbody tr')
  for (let i = 0; i < await rows.count(); i++) {
    let rowOrderId = await rows.nth(i).locator('th').textContent()
    // if (orderId.includes(rowOrderId)) {
    //   await rows.nth(i).locator('th').click()
    //   // break;
    // }
  }
  await page.locator(`tbody tr:nth-child(1) [tabindex='0']`).click()
  await page.pause()
});
