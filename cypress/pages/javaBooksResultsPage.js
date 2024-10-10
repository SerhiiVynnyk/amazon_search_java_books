export class JavaBooksResults {
  h2 = 'h2';
  bookCard = '.puis-card-container';
  bookAuthor= '[data-cy="title-recipe"] > div';
  bookPrice = '.a-price';
  textPrice = '.a-text-price';
  offscreanPrice = '.a-offscreen';
  bestSellerSign = '.sx-bestseller-component';

  //Methods to be added
  genetgenerateArrayOfBooksObjs() {
    const booksList = [];
     cy.get(this.bookCard).each(($card) => {
      const bookinfo = {
        name: $card.find(this.h2).text().trim(),
        author: $card.find(this.bookAuthor).text().trim().split('|').find(str => str.trim().startsWith('by')).trim().slice(3),
        price: $card.find(this.bookPrice).not(this.textPrice).last().find(this.offscreanPrice).text().trim(),
        isBestSeller: $card.find(this.bestSellerSign).length > 0
      };
      booksList.push(bookinfo);
    });
    return booksList
  }
}