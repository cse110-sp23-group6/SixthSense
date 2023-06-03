
describe('End to end testing', () => {
    beforeAll(async () => {
      await page.goto('http://127.0.0.1:5500/index.html');
    });
  
    it('Home page should load', async () => {
        let x = 2 + 1;
      expect(x).toBe(3);
    });
  });