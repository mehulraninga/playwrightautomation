import {test,expect} from "@playwright/test"

test("Validate Login", async function({page}){

    await page.goto("https://devdemo.wavebid.com/next/login")

    await page.locator("input[name='username']").type("mehul.r@simformsolutions.com",{delay:200})
    await page.locator("input[name='password']").type("Jadeja@1234",{delay:200})
    await page.locator("//button[@type='submit']").click()
    //await page.waitForTimeout(5000)
    await expect(page).toHaveURL(/auction/)

    await page.getByTestId("avatar").click()
    await page.getByText("Log out").click()
    //await page.waitForTimeout(5000)
    await expect(page).toHaveURL(/login/)
})