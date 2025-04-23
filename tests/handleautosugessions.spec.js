import {test, expect} from '@playwright/test';

test("Handle Auto sugessions", async function({page}){

    await page.goto("https://www.google.com");
    await page.locator("textarea[name='q']").type("Playwright Automation");
    await page.waitForSelector("//li[@role='presentation']")
    await page.keyboard.press('ArrowDown')
    await page.keyboard.press('ArrowDown')
    await page.keyboard.press('ArrowDown')
    await page.keyboard.press('Enter')
    await page.waitForTimeout(5000)
})

test.only("Handle Auto Sugessions wiht $$", async function({page}){

    await page.goto("https://www.google.com");
    await page.locator("textarea[name='q']").type("Playwright Automation");
    await page.waitForSelector("//li[@role='presentation']")

    const elements = await page.$$("li[role='presentation']");

    for(let i=0; i<elements.length; i++){

        const text = await elements[i].textContent()

        if(text.includes("tutorial")){
            
            await elements[i].click()
            await page.waitForTimeout(5000)
            break
            await page.waitForTimeout(5000) 
            
        }
    }

    await page.waitForTimeout(5000)
})