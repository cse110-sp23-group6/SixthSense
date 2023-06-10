/**
 * @jest-environment puppeteer
 */

describe('End to end testing for new profile page', () => {
  beforeAll(async () => {
    await page.goto('http://127.0.0.1:8080/index.html');
  });
  
  beforeEach(async () => {
    console.log(expect.getState().currentTestName);
    await page.waitForTimeout(50);
  });
  
  it('main page to new user', async () => {
    const newUserbtn = await page.$('#user');
    await newUserbtn.click();
    await page.waitForNavigation();
    const newURL = await page.url();
    expect(newURL).toBe('http://127.0.0.1:8080/newprofile.html');
  }, 30000);
  
  it('new user back to main page', async () => {
    const homebtn = await page.$('#home');
    await homebtn.click();
    await page.waitForNavigation();
    let newURL = await page.url();
    expect(newURL).toBe('http://127.0.0.1:8080/index.html');
  }, 30000);
  
  it('new user invalid input', async () => {
    const newUserbtn = await page.$('#user');
    await newUserbtn.click();
    await page.waitForNavigation();
    // begin inputting information
    await page.type('#year', '2010');
    await page.type('#month', '07');
    // invalid input
    await page.type('#date', '32');
    await page.type('#name', 'testing');
    await page.select('select#status', 'complicated');
    const is_disabled = (await page.$$('button[disabled]')).length !== 0;
    expect(is_disabled).toBe(true);

    const home = await page.$('#home');
    await home.click();
    await page.waitForNavigation();
  }, 30000);

  it('button active after valid input', async () => {
    const newUserbtn = await page.$('#user');
    await newUserbtn.click();
    await page.waitForNavigation();
    await page.select('select#status', 'complicated');
    await page.type('#year', '2010');
    await page.type('#month', '07');
    await page.type('#date', '20');
    await page.type('#name', 'testing');
    await page.type('#month', '06');
    const is_disabled = (await page.$$('button[disabled]')).length !== 0;
    expect(is_disabled).toBe(false);
    let submitbtn = await page.$('#submit');
    const content = await (await submitbtn.getProperty('textContent')).jsonValue();
    expect(content).toBe('Submit');
    await page.hover('#submit');
    await Promise.all([
      page.waitForNavigation(),
      page.click('#submit')
    ]);
  }, 30000);
  
  it('hidden button after creating page', async () => {
    await page.waitForTimeout(10000);
    const URL = page.url();
    expect(URL).toBe('http://127.0.0.1:8080/index.html');
    const userBtn = await page.$('#user');
    expect(await userBtn.isHidden()).toBe(true);
  }, 30000);
});
