import test, { expect } from "playwright/test";
import { LoginPage } from "./pageobjects/loginPage";


test('Saucedemo', async ({page}) => {

    //LOGIN
    await page.goto('https://www.saucedemo.com/');
    const login =  new LoginPage(page);
    await login.loginWithCredentals('standard_user','secret_sauce');
    await login.checkSuccessfullLogin();

    //await page.screenshot({path: 'SS/ss.png', fullPage:true})

    //HOME PAGE
    const items = await page.locator('#inventory_container  .inventory_item').all();

    const randomindex = Math.floor(Math.random() * items.length);

    const randomItem = items[randomindex];

    const expectDesc = await randomItem.locator('.inventory_item_desc').innerText();
    const expectName = await randomItem.locator('.inventory_item_name').innerText();
    const expectPrice = await randomItem.locator('.inventory_item_price').innerText();

    console.log(`Name: ${expectName}`);
    console.log(`Price: ${expectPrice}`);
    console.log(`Description: ${expectDesc}`);

    await randomItem.getByRole('button', {name: 'Add to cart', exact: true}).click();

    await page.locator('//a[@class="shopping_cart_link"]').click();

    const actualItemName = await page.locator('.inventory_item_name').innerText();
    const actualItemPrice = await page.locator('.inventory_item_price').innerText();
    const actualItemDesc = await page.locator('.inventory_item_desc').innerText();

    //Cart Page

    expect(page.getByRole('button', {name: 'Checkout', exact: true})).toBeVisible();

    expect(actualItemName).toEqual(expectName);
    expect(actualItemPrice).toEqual(expectPrice);
    expect(actualItemDesc).toEqual(expectDesc);
    
    page.getByRole('button', {name: 'Checkout'}).click();

    await page.getByRole('textbox', {name: 'First Name'}).fill('Test');
    await page.getByRole('textbox', {name: 'Last Name'}).fill('Test');
    await page.getByRole('textbox', {name: 'Zip/Postal Code'}).fill('1234');
    await page.getByRole('button', {name: 'Continue'}).click();

    //Checkout: Overview Page
    await page.getByRole('button', {name: 'Finish'}).click();

    //Checkout: Complete!
    expect(await page.getByRole('heading', {name: 'Thank you for your order!'})).toBeVisible();
    await page.getByRole('button', {name: 'Back Home'}).click();
    
    //await page.pause();

});

test('navigate', async ({page}) => {
    await page.goto(process.env.URL);
    await page.pause();
    const login =  new LoginPage(page);
    await login.loginWithCredentals('standard_user','secret_sauce');
    await login.checkSuccessfullLogin();
});