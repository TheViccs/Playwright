import test, { expect } from "playwright/test";
import { LoginPage } from "./pageobjects/loginPage";

test('Saucedemo 2', async ({page}) => {

    await page.on("request", req => {console.log(req.url)})

    // Bloquear imagenes por link
    //await page.route("https://www.saucedemo.com/static/media/sauce-backpack-1200x1500.0a0b85a3.jpg", (route) => route.abort)
    //await page.route("https://www.saucedemo.com/static/media/bike-light-1200x1500.37c843b0.jpg", (route) => route.abort)

    //Bloquear imagenes por expresiones regulares
    await page.route("**/*.{png,jpg,svg,jpeg}", (route) => route.abort)



    //LOGIN
    await page.goto('https://www.saucedemo.com/');
    
    const login =  new LoginPage(page);
    await login.loginWithCredentals('standard_user','secret_sauce');
    await login.checkSuccessfullLogin();

    await page.pause();
    await page.screenshot({path:"login.png", fullPage:true})

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

test('Interceptor Test', async ({page}) => {



    await page.route("https://demoqa.com/BookStore/v1/Books", (route) =>{
        route.fulfill({
            status:304,
            headers:{
                'Content-Type':'application/json'
            },
            body:`
            {
    "books": [
        {
            "isbn": "9781449325862",
            "title": "Libro Chido",
            "subTitle": "A Working Introduction",
            "author": "Richard E. Silverman",
            "publish_date": "2020-06-04T08:48:39.000Z",
            "publisher": "O'Reilly Media",
            "pages": 1,
            "description": "This pocket guide is the perfect on-the-job companion to Git, the distributed version control system. It provides a compact, readable introduction to Git for new users, as well as a reference to common commands and procedures for those of you with Git exp",
            "website": "http://chimera.labs.oreilly.com/books/1230000000561/index.html"
        }
    ]
}     
            `
        })
    })



    //LOGIN
    await page.goto('https://demoqa.com/books');
    await page.pause()
    await page.screenshot({path:"booka.png", fullPage:true})

});



