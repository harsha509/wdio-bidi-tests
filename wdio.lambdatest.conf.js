
export const config = {
    specs: [
      './test/specs/*.spec.js'
    ],

  capabilities: [
    {
      browserName: "chrome",
      "LT:Options": {
        version: "latest",
        build: "BiDi Test",
        name: "Chrome - BiDi test",
      }
    }],

  user: process.env.LT_USERNAME,
  key: process.env.LT_ACCESS_KEY,
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
