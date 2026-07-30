import {test,expect} from "@playwright/test"
import { loginpayload } from "../../test_data/Loginpayload";
import{APIUtils} from "../../Utils/APIUtils"
test("Login API", async ({ request }) => {

    const apiUtils = new APIUtils(request);

    const token = await apiUtils.getToken();

    console.log(token);
});
