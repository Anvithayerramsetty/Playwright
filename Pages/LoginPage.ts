import {Page,Locator,expect} from "@playwright/test"
export class Loginpage{
    page:Page
    username:Locator
    password:Locator
    Login:Locator
    constructor(page:Page){
    this.page=page
    this.username=page.locator("#userEmail");
    this.password=page.locator("#userPassword");
    this.Login=page.getByRole("button",{name:'Login'});
    //this.page.waitForLoadState('networkidle')
}
async Goto(){
    await this.page.goto("https://rahulshettyacademy.com/client/#/auth/login")
}
async login(username:string,password:string){
 await this.username.fill(username)
  await this.password.fill(password)
   await this.Login.click()
}
async expectUrl(url:string){
    await expect(this.page).toHaveURL(url)
}
}