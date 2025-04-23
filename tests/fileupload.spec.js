import {test,expect} from '@playwright/test'

test("verify file upload", async function({page}){

    await page.goto("https://the-internet.herokuapp.com/upload")
    await page.locator("#file-upload").setInputFiles("./uploads/sample1.pdf")
    await page.locator("#file-submit").click()
    expect(page.locator("//h3")).toHaveText("File Uploaded!")
    await page.waitForTimeout(5000)
})