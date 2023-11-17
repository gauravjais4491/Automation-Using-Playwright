class ShopPage {
    constructor(page) {
        this.page = page;
    }
    get shopAllLink(){
        return this.page.getByRole('link', { name: 'Shop all' })
    }
    get productBtn(){
        return this.page.getByRole('link', { name: 'ADIDAS | KID\'S STAN SMITH' })
    }

    async clickShopAllLink() {
        await this.shopAllLink.click()
    }

    async clickProductLink() {
        await this.productBtn.click()
    }
}

module.exports = { ShopPage };