import {test, expect} from '@playwright/test';

test("Handle Multi Tabs", async({browser})=>{

    const context = await browser.newContext();

    const page = await context.newPage()

    await page.goto("https://freelance-learn-automation.vercel.app/login")

   const [newPage] = await Promise.all
    (
        [
            context.waitForEvent("page"),
            page.locator("(//*[name()='svg'][@id='Layer_1'])[3]").click()

        ]
    )
    await newPage.waitForTimeout(5000)
    await newPage.locator("(//span[@id='«r2»'])[1]").type("mehul.r@simformsolutions.com")
    await newPage.waitForTimeout(5000)

    await newPage.close()

    await page.locator("#email1").fill("admin@email.com")
    await page.waitForTimeout(3000)
})