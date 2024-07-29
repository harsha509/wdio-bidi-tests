describe("Browsing context text", ()=> {
  it("should have navigation id", async ()=> {

    await browser.url('https://www.google.co.in/');
    let id  = await browser.getWindowHandle();

    await browser.browsingContextNavigate({url: 'https://www.selenium.dev/selenium/web/bidi/logEntryAdded.html', context: id});
    browser.on('message', (data) => console.log('received %s', data))

    await browser.browsingContextClose({context: id})
    console.log(await browser.sessionStatus({}))
  })
})
