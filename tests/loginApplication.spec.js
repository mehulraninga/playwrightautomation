import {test,expect} from '@playwright/test'
const LoginPage = require("../pages/loginpage")
const HomePage = require("../pages/homepage")

test("Login to application", async function({page}){

    await page.goto("https://freelance-learn-automation.vercel.app/login")
    
    const loginpage = new LoginPage(page)
    await loginpage.loginToApplication()
    // await page.pause()
   
    const homepage = new HomePage(page)
    await homepage.verifyManageOption()
    await homepage.logoutFromApplication()
    await loginpage.verifyLogoutSucess()
    await page.waitForTimeout(2000)

})