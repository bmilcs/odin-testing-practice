import capitalize from "./capitalize";
import reverseString from "./reverseString";
import calculator from "./calculator";
import caesarCipher from "./caesarCipher";
import analyzeArray from "./analyzeArray";

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

test("caesar cipher: THE", () => {
  expect(caesarCipher("THE")).toStrictEqual("QEB");
});

test("caesar cipher: QUICK", () => {
  expect(caesarCipher("QUICK")).toStrictEqual("NRFZH");
});

test("caesar cipher: BROWN FOX", () => {
  expect(caesarCipher("BROWN FOX")).toStrictEqual("YOLTK CLU");
});

test("caesar cipher: JUMPS OVER THE LAZY DOG", () => {
  expect(caesarCipher("JUMPS OVER THE LAZY DOG")).toStrictEqual(
    "GRJMP LSBO QEB IXWV ALD"
  );
});

test("analyze array .min: [1,2,3,4,5]", () => {
  expect(analyzeArray([1, 2, 3, 4, 5]).min).toStrictEqual(1);
});

test("analyze array .min: [100,20,30,40,50]", () => {
  expect(analyzeArray([100, 20, 30, 40, 50]).min).toStrictEqual(20);
});

test("analyze array .max: [1,2,3,4,5]", () => {
  expect(analyzeArray([1, 2, 3, 4, 5]).max).toStrictEqual(5);
});

test("analyze array .max: [100,20,30,40,50]", () => {
  expect(analyzeArray([100, 20, 30, 40, 50]).max).toStrictEqual(100);
});

test("analyze array .average: [1,2,3,4,5]", () => {
  expect(analyzeArray([1, 2, 3, 4, 5]).average).toStrictEqual(3);
});

test("analyze array .average: [100,20,30,40,50]", () => {
  expect(analyzeArray([100, 20, 30, 40, 50]).average).toStrictEqual(48);
});

test("analyze array .length: [1,2,3,4,5]", () => {
  expect(analyzeArray([1, 2, 3, 4, 5]).length).toStrictEqual(5);
});

test("analyze array .length: [100,20,30,40,50]", () => {
  expect(analyzeArray([100, 20, 30, 40, 50]).length).toStrictEqual(5);
});
