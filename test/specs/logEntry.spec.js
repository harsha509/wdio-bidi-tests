describe("Log Entry", ()=> {
  it("Should listen to console log events", async ()=> {
    // Set up an event listener for 'log.entryAdded' to log console entries in real-time
    await browser.on('log.entryAdded', (entryAdded) => console.log('received %s', entryAdded))

    // Execute a JavaScript snippet in the browser context
    await browser.executeScript('console.log("Hello Bidi")', [])
  })
})
