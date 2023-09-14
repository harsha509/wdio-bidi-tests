
export const config = {
    specs: [
        './test/specs/BrowsingContext.spec.js'
    ],

  capabilities: [
    {
      webSocketUrl: true,
      "LT:Options": {
        browserName: "chrome",
        webSocketUrl: true,
        version: "latest",
        name: "Test WebdriverIO bidi",
        build: "Bidi test"
      }
    }],

  user: "sri_harsha509",
  key: "f5fINMkiNnSvGqgVeJ9DCH61jDC8XiJ7Q0D0HDpDUjw5YkeF16",
  buildName: "bidi test",

  services: [
    [
      "lambdatest",
      {
        tunnel: false,
        lambdatestOpts: {
          logFile: "tunnel.log"
        }
      }
    ]
  ],

  logLevel: "info",
  coloredLogs: true,
  screenshotPath: "./errorShots/",
  waitforTimeout: 100000,
  connectionRetryTimeout: 90000,
  connectionRetryCount: 1,
  path: "/wd/hub",
  hostname: "hub.lambdatest.com",
  port: 80,
  framework: "mocha",
  mochaOpts: {
    ui: "bdd",
    timeout: 50000,
  }
}
