import capitalize from "./capitalize";
import reverseString from "./reverseString";
import calculator from "./calculator";

test("capitalize: basketball", () => {
  expect(capitalize("basketball")).toStrictEqual("Basketball");
});

test("capitalize: sPOON", () => {
  expect(capitalize("sPOON")).toStrictEqual("SPOON");
});

test("reverse string: shark", () => {
  expect(reverseString("shark")).toStrictEqual("krahs");
});

test("reverse string: my name is", () => {
  expect(reverseString("my name is")).toStrictEqual("si eman ym");
});

test("calculator: add 5+5", () => {
  expect(calculator.add(5, 5)).toStrictEqual(10);
});

test("calculator: subtract 10-5", () => {
  expect(calculator.subtract(10, 5)).toStrictEqual(5);
});

test("calculator: multiply 10, 5", () => {
  expect(calculator.multiply(10, 5)).toStrictEqual(50);
});

test("calculator: divide 100, 5", () => {
  expect(calculator.divide(100, 5)).toStrictEqual(20);
});
