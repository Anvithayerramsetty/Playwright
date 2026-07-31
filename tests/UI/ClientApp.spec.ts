import { Loginpage } from "../../Pages/LoginPage"
import {test} from "../../fixtures/fixtures";
import { loginpayload } from '../../test_data/Loginpayload';


test("Login flow",async({loginpage,page})=>{
    test.setTimeout(60000)
    const url="https://rahulshettyacademy.com/client/#/dashboard/dash"
   
    await loginpage.Goto()
    await page.waitForTimeout(5000)
   // await loginpage.login(
   //     loginpayload.userEmail,
    //    loginpayload.userPassword
 //   )
   
    //await loginpage.expectgetProductUrl(url)
    
    
  
    
   


})