import { Page, Locator, expect } from "@playwright/test"

export class LoginPage {
    page: Page;
    username: Locator;
    password: Locator;
    Login: Locator;
    constructor(page: Page) {
        this.page = page;
        this.username = page.getByPlaceholder("Username");
        this.password = page.getByPlaceholder("Password");
        this.Login = page.getByRole('button', { name: 'Login' });
    }

    async goto() {

        await this.page.goto("https://www.saucedemo.com");
    }

    async login(username:string, password:string) {
        await this.username.fill(username);
        await this.password.fill(password);
        await this.Login.click();

    }

    async expectUrl(expectedUrl: string) {
        await expect(this.page).toHaveURL(expectedUrl);

    }
}  