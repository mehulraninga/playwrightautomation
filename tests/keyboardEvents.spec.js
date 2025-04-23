import {test, expect} from '@playwright/test';

test("Keyboard Events in playwright", async function({page}){

    await page.goto("https://www.google.com")

    await page.locator("textarea[name='q']").focus()
    await page.keyboard.type("Playwright Automation!")
    await page.keyboard.press('ArrowLeft')
    await page.keyboard.down('Shift')

    for(let i=0; i<'Automation'.length; i++){
        await page.keyboard.press('ArrowLeft')
    }
    await page.keyboard.up('Shift')
    await page.keyboard.press('Backspace')

    await page.waitForTimeout(5000)


   /* await page.locator("textarea[name='q']").type("Playwright Automation")
    await page.keyboard.press('Meta+A')
    await page.keyboard.press('Meta+C')
    await page.keyboard.press('Backspace')
    await page.keyboard.press('Meta+V')
    await page.keyboard.press('Enter')
    await page.waitForTimeout(5000)
    */
})