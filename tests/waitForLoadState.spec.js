import {test,expect} from '@playwright/test'

test("Working with load state", async({page})=>{

    await page.goto("https://freelance-learn-automation.vercel.app/login")

    await page.locator("(//a[normalize-space()='New user? Signup'])[1]").click()

    //await page.getByAltText("New user? Signup").click()

    await page.waitForLoadState("networkidle")

    const count = await page.locator("//input[@type='checkbox']").count()

    expect(count).toBe(8)



})