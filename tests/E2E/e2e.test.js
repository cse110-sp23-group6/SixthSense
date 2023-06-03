
describe('End to end testing', () => {
    beforeAll(async () => {
      await page.goto('http://127.0.0.1:5500/src/index.html');
    });
  
    it('Home page to choose your fortune navigation test', async () => {
        console.log("attempting to go from home to get fortunes");
        let but1 = await page.$('#b1');
        //let text = await page.evaluate(but => but.textContent, but1);
        //console.log(text);
        await but1.click();
        await page.waitForNavigation();
        let newUrl = await page.url();
        expect(newUrl).toBe('http://127.0.0.1:5500/src/choose-your-fortune.html');
    });

    /*it('choose your fortune to choose a picture (love) navigation test', async () => {
        let but1 = await page.$('#b1');
        //let text = await page.evaluate(but => but.textContent, but1);
        //console.log(text);
        await but1.click();
        await page.waitForNavigation();
        let newUrl = await page.url();
        expect(newUrl).toBe('http://127.0.0.1:5500/choose-your-fortune.html');
    });*/
  });