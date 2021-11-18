import {MainPage} from "../pages/main.page";
import {LoginPage} from "../pages/login.page";

export class Login {

  static loginUser() {
    MainPage.checkMainLogo()
    MainPage.clickCookieAccept()
    MainPage.clickCloseInternationalPopup()
    MainPage.clickUserIcon()
    LoginPage.fillEmailField()
    LoginPage.fillPassField()
    LoginPage.clickLoginButton()
    MainPage.checkUserLogo()

  }
}
