describe("Network Events", ()=> {
  it("should listen to network request and response events", async ()=> {

    // Subscribe to network request events
    await browser.on('network.beforeRequestSent', (event) => {
      console.log(`Request sent to: ${event.request.url}`);
    });

    // Subscribe to network response events
    await browser.on('network.responseCompleted', (event) => {
      console.log(`Response received from: ${event.request.url}, Status: ${event.response.status}`);
    });

    await browser.url('https://webdriver.io/');
  })
})
