import {test,expect} from "@playwright/test"

test("Verify Application Title", async function({page}){

    await page.goto("https://wwww.google.com")

    const url = await page.url()

    console.log("Page URL is = " +url)

    const title = await page.title()

    console.log("Page title is = " +title)

    await expect(page).toHaveTitle("Google")
})
test("Test again", async function({page}){

        await page.goto("http://www.google.com")
        const url = await page.url()
        console.log("Page URL is:- " +url)
        const title = await page.title()
        console.log("Page Title is:- " +title)
        await expect(page).toHaveTitle("Google")
})
