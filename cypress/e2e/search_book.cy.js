import { testInformation } from "../fixtures/testData";
import { AmazonMainPage } from "../pages/amazonMainPage";
import { HeadFirsJava } from "../pages/headFirstJavaPage";
import { JavaBooksResults } from "../pages/javaBooksResultsPage";

const amazonMainPage = new AmazonMainPage();
const javaBooksResults = new JavaBooksResults();
const headFirstJava = new HeadFirsJava;
describe('Search Java books', () => {
  it('Select informations about Java books', () => {
    let booksList = [];
    let bookName;
    let bookAuthors = [];
    let bookPrice;

    cy.visit('/');
    amazonMainPage.selectFromDepartaments(testInformation.booksDepartament);
    amazonMainPage.mainPageSearchItem(testInformation.JavaBook);
    booksList = javaBooksResults.genetgenerateArrayOfBooksObjs();
    cy.then(() => {
      cy.visit(testInformation.javaBookLink);
      headFirstJava.openAllBookAuthors();
      headFirstJava.getBookTitle().then((title) => bookName = title);
      bookAuthors = headFirstJava.getArrayOfAuthors();
      headFirstJava.getBookPrice().then(price => bookPrice = price);
    }).then(() => {
      const searchedBook = booksList.find(item => item.name === bookName);
      headFirstJava.chekBooksObjectsPriceToEqual(searchedBook.price, bookPrice);
      headFirstJava.chekBooksObjectsAuthorsToInclude(bookAuthors.join(', '), searchedBook.authors.join(', '));
    });
  });
});