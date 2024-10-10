import { Actions } from "../helpers/Actions";

export class AmazonMainPage {
  departamentDropdown = '#searchDropdownBox';
  searchAmazon = '#twotabsearchtextbox';
  searchButton = '#nav-search-submit-button';

  selectFromDepartaments(value){
    Actions.selectFromDropdown(this.departamentDropdown, value);
  }

  mainPageSearchItem(item) {
    Actions.typeText(this.searchAmazon, item);
    Actions.clickElementByLocator(this.searchButton);
  }
}