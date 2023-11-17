class PageUrl{
    constructor(page) {
        this.page = page;
    }
    goto(){
        return this.page.goto('https://testvagrant.myshopify.com/');
    }
}

module.exports = { PageUrl };