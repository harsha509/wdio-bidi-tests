import WebDriver from 'webdriver'

const browser = await WebDriver.newSession({
  capabilities: {
    webSocketUrl: true,
    browserName: 'chrome',
  }
});

let id  = await browser.getWindowHandle();

await browser.browsingContextNavigate({url: 'https://www.selenium.dev/selenium/web/bidi/logEntryAdded.html', context: id});

browser.on('message', (data) => console.log('received %s', data))

await browser.deleteSession()
