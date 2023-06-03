
describe('End to end testing', () => {
  beforeAll(async () => {
    await page.goto('http://127.0.0.1:8080/index.html');
  });

  it('Home page to choose your fortune navigation test', async () => {
    console.log("attempting to go from home to get fortunes");
    let but1 = await page.$('#b1');
    //let text = await page.evaluate(but => but.textContent, but1);
    //console.log(text);
    await but1.click();
    await page.waitForNavigation();
    let newUrl = await page.url();
    expect(newUrl).toBe('http://127.0.0.1:8080/choose-your-fortune.html');
  });



/**
 * 
 * Below are a bunch of test that tests going between selection pages
 * 
 */



//----------------------------Love----------------------------

  it('choose your fortune to emotions1 (love) navigation test', async () => {
    let but1 = await page.$('#love-div');
    await but1.click();
    await page.waitForNavigation();
    let newUrl = await page.url();
    expect(newUrl).toBe('http://127.0.0.1:8080/emotions1.html?reading=love');
  });

  it('emotions1 (love) select nothing test', async () => {
    let but1 = await page.$('#button-right');
    await but1.click();
    await page.waitForTimeout(1000);
    let newUrl = await page.url();
    expect(newUrl).toBe('http://127.0.0.1:8080/emotions1.html?reading=love');

    let buttons = await page.$$('.round-button');
    expect(buttons.length).toBe(5);
  });

  it('emotions1 (love) select something test', async () => {
    let but1 = await page.$('#two');
    await but1.click();
    let but2 = await page.$('#button-right');
    await but2.click();
    await page.waitForNavigation();
    let newUrl = await page.url();
    expect(newUrl).toBe('http://127.0.0.1:8080/emotions2.html?reading=love');
  });

  it('emotions2 (love) select nothing test', async () => {
    let but1 = await page.$('#next');
    await but1.click();
    await page.waitForTimeout(1000);
    let newUrl = await page.url();
    expect(newUrl).toBe('http://127.0.0.1:8080/emotions2.html?reading=love');

    let buttons = await page.$$('.button');
    expect(buttons.length).toBe(5);
  });

  it('emotions2 to emotions1 (love)', async () => {
    let but1 = await page.$('#back');
    await but1.click();
    await page.waitForNavigation();
    let newUrl = await page.url();
    expect(newUrl).toBe('http://127.0.0.1:8080/emotions1.html?reading=love');
  });

  it('emotions1 (love) back to choose your fortune', async () => {
    let but1 = await page.$('#button-left');
    await but1.click();
    await page.waitForNavigation();
    let newUrl = await page.url();
    expect(newUrl).toBe('http://127.0.0.1:8080/choose-your-fortune.html');
    await page.evaluate(() => localStorage.clear());
  });

  /*it('CYF to emotions2 (love)', async () => {
    let but1 = await page.$('#love-div');
    await but1.click();
    await page.waitForNavigation();
    let newUrl = await page.url();
    expect(newUrl).toBe('http://127.0.0.1:8080/emotions2.html?reading=love');
  });

  it('emotions2 to emotions1 (love)', async () => {
    let but1 = await page.$('#back');
    await but1.click();
    await page.waitForNavigation();
    let newUrl = await page.url();
    expect(newUrl).toBe('http://127.0.0.1:8080/emotions1.html?reading=love');
  });*/

  //----------------------------Career----------------------------

  it('choose your fortune to emotions1 (career) navigation test', async () => {
    let but1 = await page.$('#career-div');
    await but1.click();
    await page.waitForNavigation();
    let newUrl = await page.url();
    expect(newUrl).toBe('http://127.0.0.1:8080/emotions1.html?reading=career');
  });

  it('emotions1 (career) select nothing test', async () => {
    let but1 = await page.$('#button-right');
    await but1.click();
    await page.waitForTimeout(1000);
    let newUrl = await page.url();
    expect(newUrl).toBe('http://127.0.0.1:8080/emotions1.html?reading=career');

    let buttons = await page.$$('.round-button');
    expect(buttons.length).toBe(5);
  });

  it('emotions1 (career) select something test', async () => {
    let but1 = await page.$('#two');
    await but1.click();
    let but2 = await page.$('#button-right');
    await but2.click();
    await page.waitForNavigation();
    let newUrl = await page.url();
    expect(newUrl).toBe('http://127.0.0.1:8080/emotions2.html?reading=career');
  });

  it('emotions2 (career) select nothing test', async () => {
    let but1 = await page.$('#next');
    await but1.click();
    await page.waitForTimeout(1000);
    let newUrl = await page.url();
    expect(newUrl).toBe('http://127.0.0.1:8080/emotions2.html?reading=career');

    let buttons = await page.$$('.button');
    expect(buttons.length).toBe(5);
  });

  it('emotions2 to emotions1 (career)', async () => {
    let but1 = await page.$('#back');
    await but1.click();
    await page.waitForNavigation();
    let newUrl = await page.url();
    expect(newUrl).toBe('http://127.0.0.1:8080/emotions1.html?reading=career');
  });

  it('emotions1 (career) back to choose your fortune', async () => {
    let but1 = await page.$('#button-left');
    await but1.click();
    await page.waitForNavigation();
    let newUrl = await page.url();
    expect(newUrl).toBe('http://127.0.0.1:8080/choose-your-fortune.html');
    await page.evaluate(() => localStorage.clear());
  });


  
  //----------------------------Health---------------------------

  it('choose your fortune to emotions1 (health) navigation test', async () => {
    let but1 = await page.$('#health-div');
    await but1.click();
    await page.waitForNavigation();
    let newUrl = await page.url();
    expect(newUrl).toBe('http://127.0.0.1:8080/emotions1.html?reading=health');
  });

  it('emotions1 (health) select nothing test', async () => {
    let but1 = await page.$('#button-right');
    await but1.click();
    await page.waitForTimeout(1000);
    let newUrl = await page.url();
    expect(newUrl).toBe('http://127.0.0.1:8080/emotions1.html?reading=health');

    let buttons = await page.$$('.round-button');
    expect(buttons.length).toBe(5);
  });

  it('emotions1 (health) select something test', async () => {
    let but1 = await page.$('#two');
    await but1.click();
    let but2 = await page.$('#button-right');
    await but2.click();
    await page.waitForNavigation();
    let newUrl = await page.url();
    expect(newUrl).toBe('http://127.0.0.1:8080/emotions2.html?reading=health');
  });

  it('emotions2 (health) select nothing test', async () => {
    let but1 = await page.$('#next');
    await but1.click();
    await page.waitForTimeout(1000);
    let newUrl = await page.url();
    expect(newUrl).toBe('http://127.0.0.1:8080/emotions2.html?reading=health');

    let buttons = await page.$$('.button');
    expect(buttons.length).toBe(5);
  });

  it('emotions2 to emotions1 (health)', async () => {
    let but1 = await page.$('#back');
    await but1.click();
    await page.waitForNavigation();
    let newUrl = await page.url();
    expect(newUrl).toBe('http://127.0.0.1:8080/emotions1.html?reading=health');
  });

  it('emotions1 (health) back to choose your fortune', async () => {
    let but1 = await page.$('#button-left');
    await but1.click();
    await page.waitForNavigation();
    let newUrl = await page.url();
    expect(newUrl).toBe('http://127.0.0.1:8080/choose-your-fortune.html');
    await page.evaluate(() => localStorage.clear());
  });

  //----------------------------Friends/Family---------------------------

  it('choose your fortune to emotions1 (friends_and_family) navigation test', async () => {
    let but1 = await page.$('#friends-and-family-div');
    await but1.click();
    await page.waitForNavigation();
    let newUrl = await page.url();
    expect(newUrl).toBe('http://127.0.0.1:8080/emotions1.html?reading=friends_and_family');
  });

  it('emotions1 (friends_and_family) select nothing test', async () => {
    let but1 = await page.$('#button-right');
    await but1.click();
    await page.waitForTimeout(1000);
    let newUrl = await page.url();
    expect(newUrl).toBe('http://127.0.0.1:8080/emotions1.html?reading=friends_and_family');

    let buttons = await page.$$('.round-button');
    expect(buttons.length).toBe(5);
  });

  it('emotions1 (friends_and_family) select something test', async () => {
    let but1 = await page.$('#two');
    await but1.click();
    let but2 = await page.$('#button-right');
    await but2.click();
    await page.waitForNavigation();
    let newUrl = await page.url();
    expect(newUrl).toBe('http://127.0.0.1:8080/emotions2.html?reading=friends_and_family');
  });

  it('emotions2 (friends_and_family) select nothing test', async () => {
    let but1 = await page.$('#next');
    await but1.click();
    await page.waitForTimeout(1000);
    let newUrl = await page.url();
    expect(newUrl).toBe('http://127.0.0.1:8080/emotions2.html?reading=friends_and_family');

    let buttons = await page.$$('.button');
    expect(buttons.length).toBe(5);
  });

  it('emotions2 to emotions1 (friends_and_family)', async () => {
    let but1 = await page.$('#back');
    await but1.click();
    await page.waitForNavigation();
    let newUrl = await page.url();
    expect(newUrl).toBe('http://127.0.0.1:8080/emotions1.html?reading=friends_and_family');
  });

  it('emotions1 (friends_and_family) back to choose your fortune', async () => {
    let but1 = await page.$('#button-left');
    await but1.click();
    await page.waitForNavigation();
    let newUrl = await page.url();
    expect(newUrl).toBe('http://127.0.0.1:8080/choose-your-fortune.html');
    await page.evaluate(() => localStorage.clear());
  });
});


/**
 * 
 * Below are a bunch of tests that check the general readings page
 * 
 */