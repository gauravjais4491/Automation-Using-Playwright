const { test, expect } = require('@playwright/test');
const { CartPage } = require('../cartPage.js');
const { ShopPage } = require('../shopPage.js');
const { CheckoutPage } = require('../checkOutPage.js');
const { PageUrl } = require('../PageUrl/PageUrl.js')


test('should place an order via card', async ({ page }) => {
    const shopPage = new ShopPage(page);
    const cartPage = new CartPage(page);
    const checkoutPage = new CheckoutPage(page);
    const pageUrl = new PageUrl(page)

    await pageUrl.goto()
    expect()

    await shopPage.clickShopAllLink();
    await shopPage.clickProductLink();


    await cartPage.clickQuantityLabel();
    await cartPage.fillQuantity('4');
    await cartPage.clickAddToCartButton();
    await cartPage.clickViewCartLink();
    await cartPage.clickCheckoutButton();

    // Continue filling out the checkout form using methods from the CheckoutPage class

    await checkoutPage.fillEmail('gaurav@example.com');
    await checkoutPage.checkEmailSubscription();
    await checkoutPage.fillFirstName('Gaurav');
    await checkoutPage.fillLastName('Jaiswal');
    await checkoutPage.fillAddress('TestVagrant');
    await checkoutPage.selectShippingAddress();
    await checkoutPage.checkSaveInformation();

    // Fill card details within the iframe
    await checkoutPage.fillCardNumber('111');
    await checkoutPage.fillExpirationDate('08 / 28');
    await checkoutPage.fillSecurityCode('123');

    await checkoutPage.clickPayNowButton();
});