import calculator from "./Calculator";

describe("Given a calculator function", () => {
  describe("When it's called and recieves 4 and 2", () => {
    test("Then it should return 6, 2, 8, 2, 2", () => {
      const number1 = 4;
      const number2 = 2;
      const expectedResult = [6, 2, 8, 2, 2];

      const total = calculator(number1, number2);

      expect(total).toBe(expectedResult);
    });
  });
});
