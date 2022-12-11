const Config = {

    "URLs": {
        "DemoQAURL": 'https://demoqa.com',
        "PracticeFormURL": 'https://demoqa.com/automation-practice-form',
        "BrowserWindowURL": 'https://demoqa.com/browser-windows',
        "GoogleURL": 'https://www.google.com/',

    },
    "FormData": {
        "firstName": "muhammad",
        "lastName": "raheel",
        "userNumber": "03355665566"


    },
    "Filepaths": {
        "Writefile": "./Library/SampleWriteFile.json",
        "TestcafeRC": "./.testcaferc.json",
        "CucumberJSON": "./cucumber-json-reports/",
        "Screenshots": "./Artifacts/screenshots"
    },
    "DefaultBrowser": {
        "browser": "chrome"

    }

};
module.exports = { Config };