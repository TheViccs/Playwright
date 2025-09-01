import { test, expect } from '@playwright/test';

test('Tables', async ({page}) => {

    await page.goto('https://cosmocode.io/automation-practice-webtable/');

    const tableContainer = await page.locator("xpath=//table[@id='countries']")
    const rows = await tableContainer.locator("xpath=.//tr").all()

    const countries: Country[] = []

    console.log(rows.length)

    for(let row of rows){
        let country: Country = {
            name: await row.locator('xpath=//td[2]').innerText(),
            capital:await row.locator('xpath=//td[3]').innerText(),
            currency:await row.locator('xpath=//td[4]').innerText(),
            primaryLan:await row.locator('xpath=//td[5]').innerText()
        }
        countries.push(country)
    }


    /*for(let pais of countries){
        console.log(pais)
    }*/

    const filter = countries
    .filter(country => country.primaryLan === 'Portuguese')


    console.log('Paises donde hablan Portuguese', filter)



});

interface Country{
    name:string
    capital:string
    currency:string
    primaryLan:string
}



/*


--------------------------------------------------
https://cosmocode.io/automation-practice-webtable/

Elemento contenedor: //table[@id='countries']
.//tr -> filas

//table[@id='countries']//tr[2]//td[1] -> Check
//table[@id='countries']//tr[2]//td[2] -> Country
//table[@id='countries']//tr[2]//td[3] -> Capital
//table[@id='countries']//tr[2]//td[4] -> Currency
//table[@id='countries']//tr[2]//td[5] -> Primary Lang.



*/