import { Selector, t } from 'testcafe';
const Config = require('../../Config/Config')


class ToolsQAPracticePage {

     constructor(){

         this.firstName = Selector('#firstName')
         this.lastName = Selector('#lastName')
         this.male = Selector('#genterWrapper > div.col-md-9.col-sm-12 > div:nth-child(1) > label')
         this.userNumber = Selector('#userNumber')
         this.submit = Selector('#submit')

         this.userName = Selector('#user_login')
         this.password = Selector('#user_password')
         this.singInBtn = Selector('.btn')
         this.AccountSummayLink = Selector('#account_summary_tab').child('a')
         this.LoginFailedError = Selector('.alert-error')
     }

     async SubmitForm(firstName, lastName, userNumber){

        await t.typeText(this.firstName, firstName)
        await t.typeText(this.lastName, lastName)
        await t.click(this.male)
        await t.typeText(this.userNumber, userNumber)
        await t.click(this.submit)

     }

     
    async LoginWithValidUser(){
        await t  
        .wait(2000)
        .click(this.LoginBtn)
        .typeText(this.userName, user.username)
        .click(this.password, Config.Config.URLs.DemoQAURL)
        .pressKey('ctrl+a delete')
        .typeText(this.password, user.password)
        .click(this.singInBtn, { timeout: 10000 })

    }

    async LoginWithInValidUser(){
        await t  
        .wait(2000)
        .click(this.LoginBtn)
        .typeText(this.userName, user.username)
        .click(this.password)
        .pressKey('ctrl+a delete')
        .typeText(this.password, user.password+"gfd")
        .click(this.singInBtn)
        .wait(3000)
    }

}

export default new ToolsQAPracticePage();