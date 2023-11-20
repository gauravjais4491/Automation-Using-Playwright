class CartPage {
    constructor(page) {
        this.page = page;
    }

    get quantityLabel(){
        return this.page.getByLabel('Quantity')
    }

    get addToCartBtn(){
        return this.page.getByRole('button', { name: 'Add to cart' })
    }

    get viewMyCartBtn(){
        return this.page.getByRole('link', { name: 'View my cart (4)' })
    }
    get checkOutBtn(){
        return this.page.getByRole('button', { name: 'Check out' })
    }

    async clickQuantityLabel() {
        await this.quantityLabel.click();
    }

    async fillQuantity(quantity) {
        await this.quantityLabel.fill(quantity);
    }

    async clickAddToCartButton() {
        await this.addToCartBtn.click()
    }

    async clickViewCartLink() {
        await this.viewMyCartBtn.click()
    }

    async clickCheckoutButton() {
        await this.checkOutBtn.click();
    }
}

module.exports = { CartPage };