import {test as base} from "@playwright/test"
import { Loginpage } from "../Pages/LoginPage"
import {ProductPage} from "../Pages/ProductPage"
import { checkAddcartname } from "../pages/CheckoutaddDetailsPage"

type MyFixture={
    loginPage:Loginpage;
    productpage:ProductPage;
    orderprocess:checkAddcartname
}

export const test=base.extend<MyFixture>({
    loginPage:async({page},use)=>{
        const login=new Loginpage(page)
        await use(login)
    },

    productpage:async({page},use)=>{
        const Product=new ProductPage(page)
        await use(Product)
    },

    orderprocess:async({page},use)=>{
        const ordercompletion=new checkAddcartname(page)
        await use(ordercompletion)
    },
})