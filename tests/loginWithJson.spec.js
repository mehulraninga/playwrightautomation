import {test, expect} from '@playwright/test'

const testdata = JSON.parse(JSON.stringify(require("../testdata.json")))
console.log(testdata)

test("Login with JSON", async({page})=>{

    await page.goto("https://devdemo.wavebid.com/next/login")

    await page.locator("input[name='username']").type(testdata.username,{delay:200})
    await page.locator("input[name='password']").type(testdata.password,{delay:200})
    await page.locator("//button[@type='submit']").click()
})