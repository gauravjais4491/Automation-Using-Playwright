class SecurePageForStorePage {
    constructor(page, testData) {
        this.page = page;
        this.testData = testData;
        this.selectors = {
            onSalePrice: '.price--on-sale .price-item--last',
            regularPrice: '.price__regular .price-item--regular',
            onSale: '.price--on-sale'
        };
    }

    static createInstance(page, testData) {
        return new SecurePageForStorePage(page, testData);
    }

    get priceLocator() {
        return this.page.locator('.full-unstyled-link');
    }

    get brandNameLocator() {
        return this.page.locator('.caption-with-letter-spacing');
    }

    get eachProductIndividually() {
        return this.page.locator('.product-grid li');
    }

    async isFilteredAccordingToBrandNameOrNot(brand) {

        for (let i = 0; i < await this.priceLocator.count(); i++) {
            await this.priceLocator.nth(i).click();
            const brandName = await this.brandNameLocator.textContent();

            if (!this.brandMatches(brand, brandName)) {
                this.logBrandMismatchError(brandName);
            }

            await this.page.goBack();
        }
    }

    brandMatches(brandArray, brandName) {
        return brandArray.includes(brandName);
    }

    logBrandMismatchError(brandName) {
        const errorMessage = `Error: Product brand (${brandName}) does not match any of the specified brands.`;
        console.error(errorMessage);
    }

    async isFilteredAccordingToPriceRangeOrNot() {

        for (let i = 0; i < await this.eachProductIndividually.count(); i++) {
            const product = this.eachProductIndividually.nth(i);
            const priceLocator = await this.getPriceLocator(product);

            const productPrice = await this.getProductPrice(product, priceLocator);

            if (!this.isPriceInRange(productPrice, this.testData.priceFrom, this.testData.priceTo)) {
                this.logPriceOutOfRangeError(productPrice);
            }
        }
    }

    async getPriceLocator(product) {
        return (await product.locator(this.selectors.onSale).isVisible()) ? this.selectors.onSalePrice : this.selectors.regularPrice;
    }

    async getProductPrice(product, priceLocator) {
        const priceText = await product.locator(priceLocator).first().textContent();
        return +priceText.trim().substring(4);
    }

    isPriceInRange(productPrice, priceFrom, priceTo) {
        return priceFrom < productPrice && productPrice < priceTo;
    }

    logPriceOutOfRangeError(productPrice) {
        const message = `This price(${productPrice}) is not in between ${this.testData.priceFrom} to ${this.testData.priceTo}`;
        console.error(message);
    }

    get sizeValue() {
        return this.page.locator(`.js.product-form__input > label`)
    }
    async isFilteredAccordingToSizeOrNot(productSizeArray) {
        const priceCount = await this.priceLocator.count();

        for (let i = 0; i < priceCount; i++) {
            await this.priceLocator.nth(i).click();

            const sizeValueCount = await this.sizeValue.count();
            let temp = 0;
            for (let j = 0; j < sizeValueCount; j++) {
                const productSizeText = (await this.sizeValue.nth(j).textContent()).trim();
                console.log("+++++++"+sizeValueCount)
                console.log(`------${productSizeText}`)
                if (!productSizeArray.includes(productSizeText) && !(await this.sizeValue.nth(j).isChecked())) {
                    temp = 1;
                }
                else{
                    temp = 0;
                    break;
                }
                
            }
            if(temp!==0){
                this.logBrandMismatchError();
            }
            await this.page.goBack();
        }
    }

    productSizeMatches(productSizeArray, productSize) {
        return productSizeArray.some((size) => productSize.includes(size));
    }

    sizeMatches(sizeArray, sizeName) {
        return sizeArray.includes(sizeName);
    }

    logBrandMismatchError() {
        const errorMessage = `Error: Product size does not match any of the specified size.`;
        console.error(errorMessage);
    }

}

module.exports = { SecurePageForStorePage };
