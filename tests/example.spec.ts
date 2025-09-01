import { test, expect } from '@playwright/test';


test('Mercado Libre', async ({page}) => {

  //Ir a la URL
  await page.goto('https://www.mercadolibre.com.mx/');

  //Acceder al campo con xpath y llenar el campo
  await page.locator('//input[@id = "cb1-edit"]').fill('Iphone')

  //Enter
  await page.keyboard.press('Enter');

  //Esperar por un elemento
  await expect(page.locator('//ol[contains(@class, \'ui-search-layout\')]')).toBeVisible();
  
  //Generar una pausa en el codigo
  await page.pause();

  const titles = await page.locator('//ol[contains(@class, \'ui-search-layout\')]//li//h3').allInnerTexts();
 
  console.log('The total of title existing is', titles.length);
 
  for(let title of titles){
    console.log('The title is', title);
  }




});
