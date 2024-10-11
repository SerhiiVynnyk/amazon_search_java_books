import { Actions } from "../helpers/Actions";
import { Assertions } from "../helpers/assertions";

export class HeadFirsJava {
  bookTitle = '#productTitle';
  bookByInfo = '#bylineInfo';
  slotPrice = '.slot-price';
  moreNotFaded = '.more.notFaded';
  authorNotFaded = '.author.notFaded';

  chekBooksObjectsPriceToEqual(priceFromObject, bookPrice) {
    Assertions.checkGivenToEqualValue(priceFromObject, bookPrice);
  }

  chekBooksObjectsAuthorsToInclude(authorsFromObject, bookAuthor) {
    Assertions.checkGivenToIncludeValue(authorsFromObject, bookAuthor);
  }

  openAllBookAuthors() {
    Actions.clickNestedElemByLocator(this.bookByInfo, this.moreNotFaded)
  }

  getBookTitle() {
    return cy.get(this.bookTitle).then($bookTitle => $bookTitle.text().trim());
  }

  getArrayOfAuthors() {
    const bookAuthors = []
    cy.get(this.bookByInfo).find(this.authorNotFaded).each($author => bookAuthors.push($author.text().replace(/\B\s+|\s+\B|,|\(Author\)/g, '')));
    return bookAuthors
  }

  getBookPrice() {
    return cy.get(this.slotPrice).first().then($price => $price.text().substring($price.text().indexOf('-') + 1).trim());
  }
}