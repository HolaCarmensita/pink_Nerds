// Testar funktionen add som vi använder på saldo-sidan

describe("adds two numbers from an input", () => {
  it("Uses addition on content from two inputs to get one number", () => {
    let num1 = 500;
    let num2 = 200;
    expect(add(num1, num2)).toBe(700);
  });
});