import {test,expect} from '@playwright/test'

test("Verify Error message", async function({page}){

    await page.goto("https://devdemo.wavebid.com/next/login")

    console.log(await page.viewportSize().width)
    console.log(await page.viewportSize().height)

    await page.locator("//input[@name='username']").type("mehul.r@simformsolutions.com")
    await page.locator("//input[@name='password']").type("Jadeja@1234")
    await page.locator("button[type='submit']").click()
    const errorMessage = await page.getByText("Your email address or password is incorrect. Try again.").textContent()
    console.log("Error Message is:- ", errorMessage)

    await expect(errorMessage.includes('incorrect')).toBeTruthy()

})