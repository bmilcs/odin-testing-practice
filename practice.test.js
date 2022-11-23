import capitalize from "./capitalize";

test("capitalize basketball", () => {
  expect(capitalize("basketball")).toStrictEqual("Basketball");
});

test("capitalize sPOON", () => {
  expect(capitalize("sPOON")).toStrictEqual("SPOON");
});
