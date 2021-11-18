import {Navigation} from "../../page-objects/workflow/navigation";
import {Login} from "../../page-objects/workflow/login";
import {Search} from "../../page-objects/workflow/search";
import {ShopPage} from "../../page-objects/pages/shop.page";
import {BasketPage} from "../../page-objects/pages/basket.page";
import {Delivery} from "../../page-objects/workflow/delivery";

describe('Login user', () => {
  it('UserLoginTest', () => {
    //preconditions
    Navigation.navigateSite();
    Login.loginUser();
    Search.searchTestProduct();
    ShopPage.checkProductPage();
    ShopPage.addProduct();
    ShopPage.checkBasket();
    ShopPage.clickCheckoutButton();
    //test checkout page
    BasketPage.checkProductPage();
    Delivery.fillDeliveryAddress();
    BasketPage.clickContinuePayment();
    BasketPage.checkProductPage();
  })
})
