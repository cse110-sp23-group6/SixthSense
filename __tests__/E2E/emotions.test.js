/**
 * @jest-environment puppeteer
 */

describe('End to end testing for emotions 1 / 2', () => {
  beforeAll(async () => {
    await page.goto('http://127.0.0.1:5500/index.html');
  });

  beforeEach(async () => {
    console.log(expect.getState().currentTestName);
    await page.waitForTimeout(50);
  })

  it('Home page to choose your fortune navigation test', async () => {
    const but1 = await page.$('#b1');
    // let text = await page.evaluate(but => but.textContent, but1);
    // console.log(text);
    await but1.click();
    await page.waitForNavigation();
    let newUrl = await page.url();
    expect(newUrl).toBe('http://127.0.0.1:5500/choose-your-fortune.html');
  }, 30000);

  /**
 *
 * Below are a bunch of test that tests going between selection pages
 *
 */

  // ----------------------------Love----------------------------
  describe("Test Love Page", () => {
    it('choose your fortune to emotions1 (love) navigation test', async () => {
      await page.waitForTimeout(4000);
      const but1 = await page.$('#love-div');
      await but1.click();
      try {
        await page.waitForNavigation();
      } catch(e){
        console.warn("Page wait for navigation timeout");
      }
      const newUrl = await page.url();
      expect(newUrl).toBe('http://127.0.0.1:5500/emotions1.html?reading=love');
    }, 30000);
  
    it('emotions1 (love) select nothing test', async () => {
      const but1 = await page.$('#button-right');
      await but1.click();
      await page.waitForTimeout(1000); 
      let newUrl = await page.url();
      expect(newUrl).toBe('http://127.0.0.1:5500/emotions1.html?reading=love');
  
      const buttons = await page.$$('.round-button');
      expect(buttons.length).toBe(5);
    }, 30000);
  
    it('emotions1 (love) select something test', async () => {
      const but1 = await page.$('#two');
      await but1.click();
      const but2 = await page.$('#button-right');
      await but2.click();
      await page.waitForNavigation();
      const newUrl = await page.url();
      expect(newUrl).toBe('http://127.0.0.1:5500/emotions2.html?reading=love');
    }, 30000);
  
    it('emotions2 (love) select nothing test', async () => {
      const but1 = await page.$('#next');
      await but1.click();
      await page.waitForTimeout(1000); 
      let newUrl = await page.url();
      expect(newUrl).toBe('http://127.0.0.1:5500/emotions2.html?reading=love');
  
      const buttons = await page.$$('.button');
      expect(buttons.length).toBe(5);
    }, 30000);
  
    it('emotions2 to emotions1 (love)', async () => {
      const but1 = await page.$('#back');
      await but1.click();
      await page.waitForNavigation();
      const newUrl = await page.url();
      expect(newUrl).toBe('http://127.0.0.1:5500/emotions1.html?reading=love');
    }, 30000);
  
    it('emotions1 (love) back to choose your fortune', async () => {
      const but1 = await page.$('#button-left');
      await but1.click();
      await page.waitForNavigation();
      const newUrl = await page.url();
      expect(newUrl).toBe('http://127.0.0.1:5500/choose-your-fortune.html');
      await page.evaluate(() => localStorage.clear());
    }, 30000);  
  });
  
  // ----------------------------Career----------------------------

  describe("Test career page", () => {
    it('choose your fortune to emotions1 (career) navigation test', async () => {
      await page.waitForTimeout(4000);
      const but1 = await page.$('#career-div');
      await but1.click();
      await page.waitForNavigation();
      const newUrl = await page.url();
      expect(newUrl).toBe('http://127.0.0.1:5500/emotions1.html?reading=career');
    }, 30000);
  
    it('emotions1 (career) select nothing test', async () => {
      const but1 = await page.$('#button-right');
      await but1.click();
      await page.waitForTimeout(1000); 
      let newUrl = await page.url();
      expect(newUrl).toBe('http://127.0.0.1:5500/emotions1.html?reading=career');
  
      const buttons = await page.$$('.round-button');
      expect(buttons.length).toBe(5);
    }, 30000);
  
    it('emotions1 (career) select something test', async () => {
      const but1 = await page.$('#two');
      await but1.click();
      const but2 = await page.$('#button-right');
      await but2.click();
      await page.waitForNavigation();
      const newUrl = await page.url();
      expect(newUrl).toBe('http://127.0.0.1:5500/emotions2.html?reading=career');
    }, 30000);
  
    it('emotions2 (career) select nothing test', async () => {
      const but1 = await page.$('#next');
      await but1.click();
      await page.waitForTimeout(1000); 
      let newUrl = await page.url();
      expect(newUrl).toBe('http://127.0.0.1:5500/emotions2.html?reading=career');
  
      const buttons = await page.$$('.button');
      expect(buttons.length).toBe(5);
    }, 30000);
  
    it('emotions2 to emotions1 (career)', async () => {
      const but1 = await page.$('#back');
      await but1.click();
      await page.waitForNavigation();
      const newUrl = await page.url();
      expect(newUrl).toBe('http://127.0.0.1:5500/emotions1.html?reading=career');
    }, 30000);
  
    it('emotions1 (career) back to choose your fortune', async () => {
      const but1 = await page.$('#button-left');
      await but1.click();
      await page.waitForNavigation();
      const newUrl = await page.url();
      expect(newUrl).toBe('http://127.0.0.1:5500/choose-your-fortune.html');
      await page.evaluate(() => localStorage.clear());
    }, 30000);  
  });
  // ----------------------------Health---------------------------

  describe("Test Health Page", () => {
    it('choose your fortune to emotions1 (health) navigation test', async () => {
      await page.waitForTimeout(4000);
      const but1 = await page.$('#health-div');
      await but1.click();
      await page.waitForNavigation();
      const newUrl = await page.url();
      expect(newUrl).toBe('http://127.0.0.1:5500/emotions1.html?reading=health');
    }, 30000);
  
    it('emotions1 (health) select nothing test', async () => {
      const but1 = await page.$('#button-right');
      await but1.click();
      await page.waitForTimeout(1000); 
      let newUrl = await page.url();
      expect(newUrl).toBe('http://127.0.0.1:5500/emotions1.html?reading=health');
  
      const buttons = await page.$$('.round-button');
      expect(buttons.length).toBe(5);
    }, 30000);
  
    it('emotions1 (health) select something test', async () => {
      const but1 = await page.$('#two');
      await but1.click();
      const but2 = await page.$('#button-right');
      await but2.click();
      await page.waitForNavigation();
      const newUrl = await page.url();
      expect(newUrl).toBe('http://127.0.0.1:5500/emotions2.html?reading=health');
    }, 30000);
  
    it('emotions2 (health) select nothing test', async () => {
      const but1 = await page.$('#next');
      await but1.click();
      await page.waitForTimeout(1000); 
      let newUrl = await page.url();
      expect(newUrl).toBe('http://127.0.0.1:5500/emotions2.html?reading=health');
  
      const buttons = await page.$$('.button');
      expect(buttons.length).toBe(5);
    }, 30000);
  
    it('emotions2 to emotions1 (health)', async () => {
      const but1 = await page.$('#back');
      await but1.click();
      await page.waitForNavigation();
      const newUrl = await page.url();
      expect(newUrl).toBe('http://127.0.0.1:5500/emotions1.html?reading=health');
    }, 30000);
  
    it('emotions1 (health) back to choose your fortune', async () => {
      const but1 = await page.$('#button-left');
      await but1.click();
      await page.waitForNavigation();
      const newUrl = await page.url();
      expect(newUrl).toBe('http://127.0.0.1:5500/choose-your-fortune.html');
      await page.evaluate(() => localStorage.clear());
    }, 30000); 
  });
  
  // ----------------------------Friends/Family---------------------------
  describe("Test Friends and Family", () => {
    it('choose your fortune to emotions1 (friends_and_family) navigation test', async () => {
      await page.waitForTimeout(4000);
      const but1 = await page.$('#friends-and-family-div');
      await but1.click();
      await page.waitForNavigation();
      const newUrl = await page.url();
      expect(newUrl).toBe('http://127.0.0.1:5500/emotions1.html?reading=friends_and_family');
    }, 30000);
  
    it('emotions1 (friends_and_family) select nothing test', async () => {
      const but1 = await page.$('#button-right');
      await but1.click();
      await page.waitForTimeout(1000);
      let newUrl = await page.url();
      expect(newUrl).toBe('http://127.0.0.1:5500/emotions1.html?reading=friends_and_family');
  
      const buttons = await page.$$('.round-button');
      expect(buttons.length).toBe(5);
    }, 30000);
  
    it('emotions1 (friends_and_family) select something test', async () => {
      const but1 = await page.$('#two');
      await but1.click();
      const but2 = await page.$('#button-right');
      await but2.click();
      await page.waitForNavigation();
      const newUrl = await page.url();
      expect(newUrl).toBe('http://127.0.0.1:5500/emotions2.html?reading=friends_and_family');
    }, 30000);
  
    it('emotions2 (friends_and_family) select nothing test', async () => {
      const but1 = await page.$('#next');
      await but1.click();
      await page.waitForTimeout(1000); 
      let newUrl = await page.url();
      expect(newUrl).toBe('http://127.0.0.1:5500/emotions2.html?reading=friends_and_family');
  
      const buttons = await page.$$('.button');
      expect(buttons.length).toBe(5);
    }, 30000);
  
    it('emotions2 to emotions1 (friends_and_family)', async () => {
      const but1 = await page.$('#back');
      await but1.click();
      await page.waitForNavigation();
      const newUrl = await page.url();
      expect(newUrl).toBe('http://127.0.0.1:5500/emotions1.html?reading=friends_and_family');
    }, 30000);
  
    it('emotions1 (friends_and_family) back to choose your fortune', async () => {
      console.log(await page.url());
      const but1 = await page.$('#button-left');
      await but1.click();
      await page.waitForNavigation();
      const newUrl = await page.url();
      expect(newUrl).toBe('http://127.0.0.1:5500/choose-your-fortune.html');
      await page.evaluate(() => localStorage.clear());
    }, 30000);
  });
});

/**
 *
 * Below are a bunch of tests that check the general readings page
 *
 */
