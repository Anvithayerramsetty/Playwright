import { Page, Locator, expect } from "@playwright/test"
export class checkAddcartname {
    page: Page
    checkout: Locator
    firstname: Locator
    lastName: Locator
    Zipcode: Locator
    Continue: Locator
    paymentinfo: Locator
    shippinginfo: Locator
    itemtotal: Locator
    taxcontent: Locator
    totalamount:Locator
    finish:Locator
    thankyoumsg:Locator
    constructor(page: Page) {
        this.page = page;
        this.checkout = page.locator("#checkout");
        this.firstname = page.locator("#first-name");
        this.lastName = page.getByPlaceholder("Last Name");
        this.Zipcode = page.getByPlaceholder("Zip/Postal Code");
        this.Continue = page.locator("#continue")
        this.paymentinfo = page.locator(".summary_info_label").first()
        this.shippinginfo = page.locator(".summary_info_label").nth(1)
        this.itemtotal = page.locator(".summary_subtotal_label")
        this.taxcontent = page.locator(".summary_tax_label")
        this.totalamount=page.locator(".summary_total_label")
        this.finish=page.locator("#finish")
        this.thankyoumsg=page.locator(".complete-header")

    }
    async checkoutclick() {
        await this.checkout.click();
    }
    async checklurl(url: string) {
        await expect(this.page).toHaveURL(url);
    }
    async formfill(firstname: string, lastname: string, Zipcode: string) {
        await this.firstname.fill(firstname);
        await this.lastName.fill(lastname);
        await this.Zipcode.fill(Zipcode);


    }
    async clickcontinue() {
        await this.Continue.click()
    }
    async paymentinfourl(url: string) {
        await expect(this.page).toHaveURL(url)
    }
    async PaymentInformation() {
      return  await this.paymentinfo.textContent()
    }
    async shippinginformation() {
       return await this.shippinginfo.click()
    }
    async getitemtotal() {
       return await this.itemtotal.textContent()
    }
    async gettaxcontent() {
       return await this.taxcontent.textContent()
    }
    async gettotalamount(){
       return await this.totalamount.textContent()
    }
    async clckfinish(){
        await this.finish.click()
    }
    async getthankyoumsg(){
       return await this.thankyoumsg.innerText()
    }
}