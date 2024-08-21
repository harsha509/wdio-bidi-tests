describe("Session", ()=> {
  it("Should create a new session", async ()=> {
    const result = await browser.sessionStatus({});
    await expect(result).toHaveProperty('ready');
  })
})
