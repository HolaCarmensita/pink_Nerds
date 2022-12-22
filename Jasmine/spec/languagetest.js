describe("changeLanguage", () => {
  it("Changes url and adds hash", () => {
    let test = changeLanguage();
    console.log(document.URL);
    expect(location.hash(test)).toContain("#/eng");
  });
});