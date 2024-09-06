describe("Log Entry", ()=> {
  it("Should be able listen console log events", async ()=> {
    // Subscribe to log entry events using WebDriver BiDi
    await browser.sessionSubscribe({ events: ['log.entryAdded'] })

    // Set up an event listener for 'log.entryAdded' to log console entries in real-time
    await browser.on('log.entryAdded', (entryAdded) => console.log('received %s', entryAdded))

    // Execute a JavaScript snippet in the browser context
    await browser.executeScript('console.log("Hello Bidi")', [])
  })
})
