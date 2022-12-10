import ToolsQAPracticePage from '../Pages/ToolsQAPracticePage';
const Config = require('../../Config/Config')


fixture `Tools QA Practice Page Auatomation`
   

test('1) OPen the page', async t => {

    await ToolsQAPracticePage.SubmitForm(
        Config.Config.FormData.firstName,
        Config.Config.FormData.lastName,
        Config.Config.FormData.userNumber,
    )
})
.page(Config.Config.URLs.PracticeFormURL)
.meta('smoke', 'true').meta('platform', 'Web')

test.skip('2) OPen the page', async t => {

    await t.takeScreenshot()

})
.meta('smoke', 'true').meta('platform', 'Web')


