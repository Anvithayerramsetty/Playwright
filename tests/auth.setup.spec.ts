import { test, expect } from '@playwright/test'
test("Authentication", async ({ page }) => {
    test.setTimeout(60000)
    await page.goto("https://rahulshettyacademy.com/client/#/auth/login")
    //await expect(page).toHaveScreenshot('homepage.png')
    await page.locator("#userEmail").fill("anvithayerramsetty@gmail.com")
    await page.locator("#userPassword").fill("Anvitha123")
    await page.getByRole("button", { name: 'Login' }).click()
     //  await page.setViewportSize({
      //  width: 1200,
      //  height: 600,
    //});
    await page.waitForURL("https://rahulshettyacademy.com/client/#/dashboard/dash")

    await expect(page).toHaveScreenshot('homepage.png')

  //  await page.context().storageState({
    //    path: '.auth/user.json'

   // });

})
