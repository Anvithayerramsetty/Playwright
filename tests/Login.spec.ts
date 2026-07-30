import { LoginPage } from "../pages/LoginPage";
import { ProductPage } from "../pages/ProductPage"
import { checkAddcartname } from "../pages/CheckoutaddDetailsPage";
import { test } from "../fixtures/Loginfixture"
test("LoginPage", async ({ page, loginPage, productpage ,orderprocess}) => {
    test.setTimeout(6000)
    const username = "standard_user";
    console.log(username)
    const password = "secret_sauce"
    console.log(password)
    const expecturl = "https://www.saucedemo.com/inventory.html"
    const productname = "Sauce Labs Bolt T-Shirt"
    console.log(productname)
    const checkouturl = "https://www.saucedemo.com/checkout-step-one.html"
    const firstname = "Anvitha";
    console.log(firstname)
    const lastname = "Yerramsetty"
    console.log(lastname)
    const checkoutUrl="https://www.saucedemo.com/checkout-step-one.html"
    const Url="https://www.saucedemo.com/checkout-step-two.html"
    let zipcode = "500068";
    console.log(zipcode)
    await loginPage.goto();
    await loginPage.login(username, password);
    await loginPage.expectUrl(expecturl);
    await productpage.productclick();
    await productpage.addCart();
    await productpage.clickcart();
await orderprocess.checkoutclick()
await orderprocess.checklurl(checkoutUrl)
await orderprocess.formfill(firstname,lastname,zipcode)
await orderprocess.clickcontinue()
await orderprocess.paymentinfourl(Url)
await orderprocess.PaymentInformation()
await orderprocess.shippinginformation()
await orderprocess.getitemtotal()
await orderprocess.gettaxcontent()
await orderprocess.gettotalamount()
await orderprocess.clckfinish()
await orderprocess.getthankyoumsg()
console.log("thank you for ordering")

});