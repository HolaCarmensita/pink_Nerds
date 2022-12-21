describe("changeLanguage", () => {
  it("Changes url and adds hash", () => {
    let browser = changeLanguage();
    expect(browser.document.URL()).toContain('#/eng');
  });
})