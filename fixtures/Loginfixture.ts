import {test as base} from "@playwright/test"
import {LoginPage} from '../pages/LoginPage'
import {ProductPage} from "../pages/ProductPage"
import { checkAddcartname } from "../pages/CheckoutaddDetailsPage"

type MyFixture={
    loginPage:LoginPage;
    productpage:ProductPage;
    orderprocess:checkAddcartname
}

export const test=base.extend<MyFixture>({
    loginPage:async({page},use)=>{
        const login=new LoginPage(page)
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