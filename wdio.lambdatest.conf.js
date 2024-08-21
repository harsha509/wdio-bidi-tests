
export const config = {
    specs: [
      './test/specs/*.spec.js'
    ],

  capabilities: [
    {
      "LT:Options": {
        browserName: "chrome",
        version: "latest",
        webSocketUrl: true,
        name: "Test WebdriverIO bidi",
        build: "Bidi test 1"
      }
    }],

  user: process.env.LT_USER,
  key: process.env.LT_KEY,
  buildName: "BiDi test",

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
