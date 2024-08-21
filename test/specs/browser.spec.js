describe("Session", ()=> {
  it("Should create user context", async ()=> {
    const {userContext} = await browser.browserCreateUserContext({});
    await expect(userContext).not.toBeNull();
  })

  it("Should get context", async ()=> {
    const {userContexts} = await browser.browserGetUserContexts({});
    await expect(userContexts.length).toBeGreaterThan(1)
  })

  it("Should remove user context", async() => {
    const {userContexts} = await browser.browserGetUserContexts({});
    const params = {
      userContext: userContexts[1].userContext
    }

    await browser.browserRemoveUserContext(params);
    const {userContexts:userContext1} = await browser.browserGetUserContexts({});
    await expect(userContext1.length).toEqual(1)
  })

  it("Should close browser", async() => {
    await browser.url('https://the-internet.herokuapp.com/')
    await browser.browserClose({})

    try {
      await browser.getTitle(); // This should fail if the browser is closed
    } catch (error) {
      await expect(error.message).toContain("no such window: target window already closed")
    }
  })
})
