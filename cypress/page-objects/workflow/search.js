import {MainPage} from "../pages/main.page";

export class Search {

  static searchTestProduct() {
    MainPage.clickSearchButton()
    MainPage.fillSearchField()
  }
}
