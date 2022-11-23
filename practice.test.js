import capitalize from "./capitalize";
import reverseString from "./reverseString";

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
