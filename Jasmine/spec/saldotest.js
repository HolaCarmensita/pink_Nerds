describe("add", () => {
  it("Sets the content to a desired number", () => {
    let num1 = 500;
    let num2 = 200;
    expect(add(num1, num2)).toBe(700);
  });
});