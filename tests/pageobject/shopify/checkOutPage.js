class CheckoutPage {
    constructor(page) {
        this.page = page;
    }
    get email(){
        return this.page.getByPlaceholder('Email')
    }

    get emailCheckBox(){
        return this.page.getByLabel('Email me with news and offers')
    }

    get firstName(){
        return this.page.getByPlaceholder('First name (optional)')
    }

    get lastName(){
        return this.page.getByPlaceholder('Last name')
    }

    get address(){
        return this.page.getByPlaceholder('Address')
    }
    get saveInformationCheckBox(){
        return this.page.getByLabel('Save this information for next time')
    }

    get selectShipping(){
        return this.page.getByRole('option', { name: 'TestVagrant Technologies, 100 Feet Road, Stage 3, Indiranagar, Bengaluru, Karnataka, India' })
    }

    get cardNumber(){
        return this.page.frameLocator('iframe[class="card-fields-iframe"][title="Field container for: Card number"]').getByPlaceholder('Card number')
    }
    get expiryDate(){
        return this.page.frameLocator("iframe[class='card-fields-iframe'][title='Field container for: Expiration date (MM / YY)']").getByPlaceholder('Expiration date (MM / YY)')
    }

    get securityCode(){
        return this.page.frameLocator("iframe[class='card-fields-iframe'][title='Field container for: Security code']").getByPlaceholder('Security code')
    }

    get payButton(){
        return this.page.getByRole('button', { name: 'Pay now' })
    }

    async fillEmail(email) {
        await this.email.fill(email);
    }

    async checkEmailSubscription() {
        await this.emailCheckBox.check();
    }

    async fillFirstName(firstName) {
        await this.firstName.fill(firstName);
    }

    async fillLastName(lastName) {
        await this.lastName.fill(lastName);
    }

    async fillAddress(addressDetails) {
        await this.address.fill(addressDetails);
    }

    async selectShippingAddress() {
        await this.selectShipping.click()
    }

    async checkSaveInformation() {
        await this.saveInformationCheckBox.check();
    }

    async fillCardNumber(cardNumber) {
        await this.cardNumber.fill(cardNumber);
    }

    async fillExpirationDate(expirationDate) {
        await this.expiryDate.fill(expirationDate);
    }

    async fillSecurityCode(securityCode) {
        await this.securityCode.fill(securityCode);
    }

    async clickPayNowButton() {
        await this.payButton.click();
        await this.payButton.click();
    }
}

module.exports = { CheckoutPage };
