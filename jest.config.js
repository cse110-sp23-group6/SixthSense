// jest.config.js
module.exports = {
    verbose: true,
    preset: "jest-puppeteer",
    testPathIgnorePatterns: [
        '__tests__/unit/jest_helpers.js'
    ]
};
