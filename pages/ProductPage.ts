import {Locator, Page,expect } from "@playwright/test";
export class ProductPage{
    page:Page
    productname:Locator
    AddCart:Locator
   productcheck:Locator
    cart:Locator
    constructor(page:Page){
        this.page=page
        this.productname=page.locator("#item_1_title_link");
        this.AddCart=page.getByText("Add to cart");
        this.productcheck=page.locator(".inventory_item_name")

        this.cart=page.locator(".shopping_cart_badge")
    }
    async productclick(){
        await this.productname.click();

    }
    async addCart(){
        await this.AddCart.click();
    }
    async clickcart(){
        await this.cart.click()
    }

   async checkAddcartname(name:string){
await (expect(this.productcheck).toHaveText(name)); 
    }
}