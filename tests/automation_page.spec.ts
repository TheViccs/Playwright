import { test, expect } from '@playwright/test';


test('Locators', async ({page}) => {

    await page.goto('http://127.0.0.1:5500/index.html');

    //Locator por CSS selector
    //await page.locator('#name').fill("CSS selector");
    
    //Locator por Xpath
    await page.locator('xpath=//input[@class=\'form\']').fill("llenado con Xpath");
    
    await page.pause();

});

test('Getbyplaceholder', async ({page}) => {

    await page.goto('http://127.0.0.1:5500/index.html');

    await page.getByPlaceholder("value").fill("llenado desde placeholder");

    await page.pause();

});

test('Getbyalltext', async ({page}) => {

    await page.goto('http://127.0.0.1:5500/index.html');

    await page.getByAltText("value").click;

    await page.pause();

});

test('test getbyRole', async ({page}) => {

    await page.goto('https://www.mercadolibre.com.mx/');
    //await page.getByRole('link', {name: 'Mis compras', exact: true}).click();
    await page.getByRole('link', {name: 'Ingresa', exact: true}).click();
    await page.pause();
});
