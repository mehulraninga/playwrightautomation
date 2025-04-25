import {test,expect} from "@playwright/test"

test("Select value from dropdown", async function({page}){

    await page.goto("https://freelance-learn-automation.vercel.app/signup")

    await page.locator("#state").selectOption({label:"Goa"})
    //await page.waitForTimeout(5000)
    await page.locator("#state").selectOption({value:"Gujarat"})
    //await page.waitForTimeout(5000)
    await page.locator("#state").selectOption({index:10})
    //await page.waitForTimeout(5000)

   /* const value = await page.locator("#state").textContent()
    console.log("All dropdown values are:- " +value)
    await expect(value.includes("Gujarat")).toBeTruthy()
    */

    let state = await page.$("#state")
    
    let allelEments = await state.$$("option")

    let ddStatus = false

    for(let i=0; i<allelEments.length; i++){

        let element = await allelEments[i]

        let value = await element.textContent()

        console.log("Dropdown value is:- " +value)

        if(value.includes("Gujarat")){
            ddStatus = true
            break
        }
    }
    await expect(ddStatus).toBeTruthy()
    await page.waitForTimeout(5000) 
    await page.locator("#state").selectOption({label:"Gujarat"})
    await page.waitForTimeout(5000)

    await page.locator("#hobbies").selectOption(['Playing','Swimming','Dancing'])
    await page.waitForTimeout(3000)
})

test("Select category from list", async function({page}){

    await page.goto("https://devdemo.wavebid.com/next/login")

    await page.locator("input[name='username']").type("mehul.r@simformsolutions.com",{delay:100})
    await page.locator("input[name='password']").type("Jadeja@123",{delay:100})
    await page.locator("//button[@type='submit']").click()
    await page.waitForTimeout(5000)
    await expect(page).toHaveURL(/auction/)

    await page.locator("#search-input").fill("WBPR-2094-01")
    await page.waitForTimeout(5000)
    await page.locator("//label[normalize-space()='M-WBPR-2094-01']").click()
    await page.waitForTimeout(5000)
    await page.locator("//a[@aria-label='Details']").click()
    await page.locator("//li[@data-testid='auction-detail-card-basic']//button[@aria-label='Edit']//*[name()='svg']").click()
    await page.waitForTimeout(5000)

})