describe("Page Load Event", ()=> {
  it("Should listen to the page load event and log the URL", async ()=> {

    await browser.sessionSubscribe({ events: ['browsingContext.load'] })

    // Capture page load event
    await browser.on('browsingContext.load', (event) => {
      console.log(`Page loaded: ${event.url}`);
    });

    await browser.url('https://webdriver.io/');
  })
})
