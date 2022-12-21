import { Selector, t } from 'testcafe';
const Config = require('../../Config/Config')


class BrowserWindowPage {

     constructor(){

         this.newTabButton = Selector('#tabButton')
         this.newWindowButton = Selector('#windowButton')
         this.male = Selector('#genterWrapper > div.col-md-9.col-sm-12 > div:nth-child(1) > label')
         this.userNumber = Selector('#userNumber')
         this.submit = Selector('#submit')

     }

     async OpenNewTab(url){

        await t.click(this.newTabButton)
        await t.navigateTo(url)

     }

}

export default new BrowserWindowPage();