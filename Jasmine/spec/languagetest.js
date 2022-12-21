describe("changeLanguage", () => {
  it("Changes url and adds hash", () => {
    let browser = changeLanguage();
    expect(browser.getCurrentUrl()).toContain("#/eng");
  });
})