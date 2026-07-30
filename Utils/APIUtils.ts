import { APIRequestContext } from "@playwright/test";
import { loginpayload } from "../test_data/Loginpayload";

export class APIUtils{
    apicontext:APIRequestContext
    constructor(apicontext:APIRequestContext){
        this.apicontext=apicontext
    }

    async getToken(){
         const loginResponse=await this.apicontext.post(
                "https://rahulshettyacademy.com/api/ecom/auth/login",
                {
                    data:loginpayload
                }
            )
    const responsebody= await loginResponse.json()
    return responsebody.token
}
}