import { Assertions } from "../helpers/assertions";

export class HeadFirsJava {
  bookTitle = '#productTitle';
  bookByInfo = '#bylineInfo';
  slotPrice = '.slot-price';

  chekBooksObjectsPriceToEqual(priceFromObject, bookPrice) {
    Assertions.checkGivenToEqualValue(priceFromObject, bookPrice);
  }

  chekBooksObjectsAuthorsToInclude(authorsFromObject, bookAuthor) {
    Assertions.checkGivenToIncludeValue(authorsFromObject, bookAuthor);
  }
}