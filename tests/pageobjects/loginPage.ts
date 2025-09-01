import { Locator, Page } from "playwright";
import { expect } from "playwright/test";

//Crear una clase
export class LoginPage{
    private readonly usernameTextbox: Locator
    private readonly passwordTextbox: Locator
    private readonly loguinButton: Locator
    private readonly shoppingIcon: Locator

    constructor(page: Page){
        this.usernameTextbox = page.getByRole('textbox', {name: 'Username'});
        this.passwordTextbox = page.getByRole('textbox', {name: 'Password'});
        this.loguinButton = page.getByRole('button', {name: 'Login'});
        this.shoppingIcon = page.locator("xpath=//a[contains(@class,'shopping_cart_link')]")
    }

    async fillUsername(username:string){
        await this.usernameTextbox.fill(username);
    }

    async fillPassword(password:string){
        await this.passwordTextbox.fill(password);
    }

    async clickLoginButton(){
        await this.loguinButton.click();
    }

    //Hacer el login
    async loginWithCredentals(username:string, password:string){
        await this.usernameTextbox.fill(username);
        await this.passwordTextbox.fill(password);
        await this.loguinButton.click();

    }

    //Assertions
    async checkSuccessfullLogin(){
        await expect(this.shoppingIcon).toBeVisible()
    }

}