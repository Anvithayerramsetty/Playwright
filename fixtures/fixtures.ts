import  {test as base} from "@playwright/test"
import {Loginpage} from "../Pages/LoginPage"
type Myfixture={
  loginpage:Loginpage;
}
export const test= base.extend<Myfixture>({
    loginpage:async({page},use)=>{
        const login=new Loginpage(page);
        await use(login);
    }


})