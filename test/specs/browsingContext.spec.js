describe("Browsing context text", ()=> {
  it("should have navigation id", async ()=> {
    let id  = await browser.getWindowHandle();

    await browser.browsingContextNavigate({
      url: 'https://the-internet.herokuapp.com/',
      context: id
    });

    browser.on('message', (data) => {
      console.log('Received Message:', data);
    });

    await browser.browsingContextClose({context: id})
  })
})
