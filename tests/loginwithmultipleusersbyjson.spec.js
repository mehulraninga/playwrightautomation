import {test,expect} from '@playwright/test'
import { describe } from 'node:test'
//import {testdata} from '../testdatalogin.json'

const logindata = JSON.parse(JSON.stringify(require('../testdatalogin.json')))

describe('Login with multiple users',()=>{

    for(const data of logindata){

        test.describe(`login multiple times ${data.id}`,()=>{

            test("Login with JSON", async({page})=>{
            
                await page.goto("https://devdemo.wavebid.com/next/login")
            
                await page.locator("input[name='username']").type(data.username,{delay:200})
                await page.locator("input[name='password']").type(data.password,{delay:200})
                await page.locator("//button[@type='submit']").click()
            })
        })
    }
})

