module.exports = {
    launch: {
        headless: process.env.CI === "true"
    },
    server: {
        command: "npm run start",
        port: 8080,
        launchTimeout: 180000
    }
};
