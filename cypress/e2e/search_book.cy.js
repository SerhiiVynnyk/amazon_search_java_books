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
    let bookAuthor;
    let bookPrice;

    cy.visit('/');
    amazonMainPage.selectFromDepartaments(testInformation.booksDepartament);
    amazonMainPage.mainPageSearchItem(testInformation.JavaBook);
    booksList = javaBooksResults.genetgenerateArrayOfBooksObjs();
    cy.then(() => {
      cy.visit(testInformation.javaBookLink);
      cy.get(headFirstJava.bookTitle).should($title => bookName = $title.text().trim());
      cy.get(headFirstJava.bookByInfo).find('a').first().should($authors => bookAuthor = $authors.text().trim());
      cy.get(headFirstJava.slotPrice).first().should($price => bookPrice = $price.text().substring($price.text().indexOf('-') + 1).trim())
    }).then(() => {
      const searchedBook = booksList.find(item => item.name === bookName);
      headFirstJava.chekBooksObjectsPriceToEqual(searchedBook.price, bookPrice);
      headFirstJava.chekBooksObjectsAuthorsToInclude(searchedBook.author, bookAuthor);
    });
  });
});