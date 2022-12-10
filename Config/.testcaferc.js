const { t } = require("testcafe")
const Config = require('../Config/Config')

module.exports = {
    skipJsErrors: true,
    hooks: {
        fixture: {
            before: async (t) => {
                // your code
            },
            after: async (t) => {
                // your code
            }
        },
        test: {
            before: async (t) => {
                // your code
                await t.maximizeWindow()
            },
            after: async (t) => {
                // your code
            }
        }
    },
    speed: 1,
    baseUrl: Config.Config.URLs.DemoQAURL,
    browsers: "chrome",
    src: "Browser/Tests",
    screenshots: {
        path: "Reports/Screenshots",
        takeOnFails: true,
        pathPattern: "${DATE}_${TIME}/test-${TEST_INDEX}/${USERAGENT}/${FILE_INDEX}.png",
        thumbnails: false,
        fullPage: false
    },
    videoPath: "Reports/Videos",
    videoOptions: {
        singleFile: true,
        failedOnly: true,
        pathPattern: "${TEST_INDEX}/${USERAGENT}/${FILE_INDEX}.mp4"
    }
}
    
   
  
