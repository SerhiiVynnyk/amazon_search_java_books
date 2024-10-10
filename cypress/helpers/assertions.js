export class Assertions {
  static checkGivenToEqualValue(given, value) {
    expect(given).to.eq(value);
  }

  static checkGivenToIncludeValue(given, value) {
    expect(given).to.include(value);
  }
}