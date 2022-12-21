import BrowserWindowPage from '../Pages/BrowserWindowPage';
import ToolsQAPracticePage from '../Pages/ToolsQAPracticePage';
const Config = require('../../Config/Config')


fixture `Tools QA Practice Page Auatomation`
   

test('1) Register the form', async t => {

    await ToolsQAPracticePage.SubmitForm(
        Config.Config.FormData.firstName,
        Config.Config.FormData.lastName,
        Config.Config.FormData.userNumber,
    )
})
.page(Config.Config.URLs.PracticeFormURL)
.meta('smoke', 'true').meta('platform', 'Web')

test.skip('2) Skip demo test', async t => {

    await t.takeScreenshot()

})
.meta('smoke', 'true').meta('platform', 'Web')

test('3) Perform the new tab and new window', async t => {

    await BrowserWindowPage.OpenNewTab(Config.Config.URLs.GoogleURL)
    const url = await t.eval(() => document.documentURI);
    await t.expect(url).eql(Config.Config.URLs.GoogleURL);

})
.page(Config.Config.URLs.BrowserWindowURL)
.meta('smoke', 'true').meta('platform', 'Web')

test('4) Perform Hover click', async t => {
    await t
    .hover('#toolTipButton')
    //.expect(Selector('.buttonToolTip').visible).ok()
})
.page(Config.Config.URLs.DemoQAURL+'/tool-tips')
.meta('smoke', 'true').meta('platform', 'Web')


test('5) Perform the Drag And Drop', async t => {
    await t.dragToElement('#draggable','#droppable')
})
.page(Config.Config.URLs.DemoQAURL+'/droppable')
.meta('smoke', 'true').meta('platform', 'Web')



