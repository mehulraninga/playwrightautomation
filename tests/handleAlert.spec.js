import {test, expect} from '@playwright/test';


test('Handle Alert', async ({page})=>{

    await page.goto("https://the-internet.herokuapp.com/javascript_alerts")

    page.on('dialog', async (d) => {

        expect(d.type()).toContain("alert")
        expect(d.message()).toContain("I am a JS Alert")
      
        await d.accept()
    })

    await page .locator("//button[text()='Click for JS Alert']").click()
})
test('Handle Confirm Alert', async ({page})=>{

    await page.goto("https://the-internet.herokuapp.com/javascript_alerts")

    page.on('dialog', async (dialogwindow) => {

        expect(dialogwindow.type()).toContain("confirm")

        expect(dialogwindow.message()).toContain("I am a JS Confirm")

        await page.waitForTimeout(5000)

        //await dialogwindow.accept()
        await dialogwindow.dismiss()
    })

    await page.locator("//button[text()='Click for JS Confirm']").click()
})
test('Handle Prompt Alert', async ({page})=>{

    await page.goto("https://the-internet.herokuapp.com/javascript_alerts")

    await page.on('dialog', async (dialogwindow)=>{

        expect(dialogwindow.type()).toContain('prompt')
        expect(dialogwindow.message()).toContain('I am a JS prompt')
        await page.waitForTimeout(5000)
        await dialogwindow.accept("Hello I am Mehul")
    })
    await page.locator("//button[text()='Click for JS Prompt']").click()
    await page.waitForTimeout(5000)
})