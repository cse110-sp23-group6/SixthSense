
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
    await page.waitForNavigation();
    let newUrl = await page.url();
    expect(newUrl).toBe('http://127.0.0.1:8080/emotions1.html?reading=love');

    let buttons = await page.$$('.round-button');
    expect(buttons.length).toBe(5);
  })

  it('emotions1 (love) select something test', async () => {
    let but1 = await page.$('#two');
    await but1.click();
    let but2 = await page.$('#button-right');
    await but2.click();
    await page.waitForNavigation();
    let newUrl = await page.url();
    expect(newUrl).toBe('http://127.0.0.1:5500/emotions2.html?reading=love');
  })

  it('emotions2 to emotions1 (love)', async () => {
    let but1 = await page.$('#back');
    await but1.click();
    await page.waitForNavigation();
    let newUrl = await page.url();
    expect(newUrl).toBe('http://127.0.0.1:5500/emotions1.html?reading=love');
  });

  it('emotions1 (love) back to choose your fortune', async () => {
    let but1 = await page.$('#button-left');
    await but1.click();
    await page.waitForNavigation();
    let newUrl = await page.url();
    expect(newUrl).toBe('http://127.0.0.1:8080/choose-your-fortune.html');
  });

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
    await page.waitForNavigation();
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
    expect(newUrl).toBe('http://127.0.0.1:5500/emotions2.html?reading=career');
  });

  it('emotions2 to emotions1 (career)', async () => {
    let but1 = await page.$('#back');
    await but1.click();
    await page.waitForNavigation();
    let newUrl = await page.url();
    expect(newUrl).toBe('http://127.0.0.1:5500/emotions1.html?reading=career');
  });

  it('emotions1 (career) back to choose your fortune', async () => {
    let but1 = await page.$('#button-left');
    await but1.click();
    await page.waitForNavigation();
    let newUrl = await page.url();
    expect(newUrl).toBe('http://127.0.0.1:8080/choose-your-fortune.html');
  });

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
    await page.waitForNavigation();
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
    expect(newUrl).toBe('http://127.0.0.1:5500/emotions2.html?reading=health');
  });

  it('emotions2 to emotions1 (health)', async () => {
    let but1 = await page.$('#back');
    await but1.click();
    await page.waitForNavigation();
    let newUrl = await page.url();
    expect(newUrl).toBe('http://127.0.0.1:5500/emotions1.html?reading=health');
  });

  it('emotions1 (health) back to choose your fortune', async () => {
    let but1 = await page.$('#button-left');
    await but1.click();
    await page.waitForNavigation();
    let newUrl = await page.url();
    expect(newUrl).toBe('http://127.0.0.1:8080/choose-your-fortune.html');
  });

  it('choose your fortune to emotions1 (friends and family) navigation test', async () => {
    let but1 = await page.$('#friends-and-family-div');
    await but1.click();
    await page.waitForNavigation();
    let newUrl = await page.url();
    expect(newUrl).toBe('http://127.0.0.1:8080/emotions1.html?reading=friends_and_family');
  });

  it('emotions1 (friends and family) select nothing test', async () => {
    let but1 = await page.$('#button-right');
    await but1.click();
    await page.waitForNavigation();
    let newUrl = await page.url();
    expect(newUrl).toBe('http://127.0.0.1:8080/emotions1.html?reading=friends_and_family');

    let buttons = await page.$$('.round-button');
    expect(buttons.length).toBe(5);
  });

  it('emotions1 (friends and family) select something test', async () => {
    let but1 = await page.$('#two');
    await but1.click();
    let but2 = await page.$('#button-right');
    await but2.click();
    await page.waitForNavigation();
    let newUrl = await page.url();
    expect(newUrl).toBe('http://127.0.0.1:5500/emotions2.html?reading=friends_and_family');
  });

  it('emotions2 to emotions1 (friends_and_family)', async () => {
    let but1 = await page.$('#back');
    await but1.click();
    await page.waitForNavigation();
    let newUrl = await page.url();
    expect(newUrl).toBe('http://127.0.0.1:5500/emotions1.html?reading=friends_and_family');
  });

  it('emotions1 (friends and family) back to choose your fortune', async () => {
    let but1 = await page.$('#button-left');
    await but1.click();
    await page.waitForNavigation();
    let newUrl = await page.url();
    expect(newUrl).toBe('http://127.0.0.1:8080/choose-your-fortune.html');
  });

  it('test')


});