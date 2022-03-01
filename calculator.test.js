const Calculator = require("./calculator");

describe("Calculator", () => {
  //Arrange
  const a = 10;
  const b = 5;
  //Act
  test("Adding 10 + 5", () => {
    const addition = Calculator.add(a, b);
    //Assert
    expect(addition).toBe(15);
  });

  test("Substracting 10 - 5", () => {
    //Act
    const subtraction = Calculator.subtract(a, b);
    //Assert
    expect(subtraction).toBe(5);
  });

  test("Dividing 10 / 5", () => {
    //Act
    const division = Calculator.divide(a, b);
    //Assert
    expect(division).toBe(2);
  });

  test("Multipling 10 * 5", () => {
    //Act
    const multiplication = Calculator.multiply(a, b);
    //Assert
    expect(multiplication).toBe(50);
  });
});
