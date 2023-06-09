module.exports = {
  launch: {
    headless: process.env.CI === 'true',
    slowMo: 25
  },
  server: {
    command: 'npm start',
    port: 8080,
    launchTimeout: 180000
  }
};
