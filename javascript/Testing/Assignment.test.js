const {
  capitalize,
  reverse,
  calculator,
  caesarCipher,
  analyzeArray,
} = require("./Assignment");

test("capitalizes the first letter of a string, Alicia", () => {
  expect(capitalize("alicia")).toBe("Alicia");
});

test("capitalizes the first letter of a string, Wilson", () => {
  expect(capitalize("wilson")).toBe("Wilson");
});

test("capitalizes the first letter of a string, Exam", () => {
  expect(capitalize("exam")).toBe("Exam");
});

test("capitalizes the first letter of a string, Jeff", () => {
  expect(capitalize("jeff")).toBe("Jeff");
});

test("capitalizes the first letter of a string, Kate", () => {
  expect(capitalize("kate")).toBe("Kate");
});

test("reverse the name Kate to be etaK", () => {
  expect(reverse("kate")).toBe("etak");
});

test("reverse the name Jeff to be ffeJ", () => {
  expect(reverse("Jeff")).toBe("ffeJ");
});

test("reverse the name cupid to be dipuc", () => {
  expect(reverse("cupid")).toBe("dipuc");
});

test("reverse the word Television to be noisiveleT", () => {
  expect(reverse("Television")).toBe("noisiveleT");
});

test("reverse the name Tolani to be inalot", () => {
  expect(reverse("Tolani")).toBe("inaloT");
});

test("add 1 + 2 = 3", () => {
  expect(calculator().sum(1, 2)).toBe(3);
});

test("add 2 + 2 = 4", () => {
  expect(calculator().sum(2, 2)).toBe(4);
});

test("add 5 + 3 = 8", () => {
  expect(calculator().sum(5, 3)).toBe(8);
});

test("add 7 + 7", () => {
  expect(calculator().sum(7, 7)).toBe(14);
});

test("add 2 + 6 = 8", () => {
  expect(calculator().sum(2, 6)).toBe(8);
});

test("sub 6 - 2 = 4", () => {
  expect(calculator().sub(6, 2)).toBe(4);
});

test("sub 8 - 6 = 2", () => {
  expect(calculator().sub(8, 6)).toBe(2);
});

test("sub 10 - 5 = 5", () => {
  expect(calculator().sub(10, 5)).toBe(5);
});

test("sub 12 - 6 = 6", () => {
  expect(calculator().sub(12, 6)).toBe(6);
});

test("add 20 - 6 = 14", () => {
  expect(calculator().sub(20, 6)).toBe(14);
});

test("mut 2 * 6 = 12", () => {
  expect(calculator().multiply(2, 6)).toBe(12);
});

test("mut 2 * 4 = 8", () => {
  expect(calculator().multiply(2, 4)).toBe(8);
});

test("mut 20 * 5 = 100", () => {
  expect(calculator().multiply(20, 5)).toBe(100);
});

test("mut 12 * 2 = 24", () => {
  expect(calculator().multiply(12, 2)).toBe(24);
});

test("mut 0 * 6 = 0", () => {
  expect(calculator().multiply(0, 6)).toBe(0);
});

test("div 6 / 6 = 1", () => {
  expect(calculator().divide(6, 6)).toBe(1);
});

test("div 12 / 6 = 2", () => {
  expect(calculator().divide(12, 6)).toBe(2);
});

test("div 20 / 5 = 4", () => {
  expect(calculator().divide(20, 5)).toBe(4);
});

test("div 0 / 0 = 0", () => {
  expect(calculator().divide(0, 0)).toBe(0);
});

test("div 0 / 6 = undefined", () => {
  expect(calculator().divide(0, 6)).toBeUndefined();
});

test("caesarCipher('xyz', 3) should return 'abc'", () => {
  expect(caesarCipher("xyz", 3)).toBe("abc");
});

test("caesarCipher('HeLLo', 3) should return 'KhOOr'", () => {
  expect(caesarCipher("HeLLo", 3)).toBe("KhOOr");
});

test("caesarCipher('Hello, World!', 3) should return 'Khoor, Zruog!'", () => {
  expect(caesarCipher("Hello, World!", 3)).toBe("Khoor, Zruog!");
});

test("analyzeArray returns the correct object for the input array", () => {
  const object = analyzeArray([1, 8, 3, 4, 2, 6]);

  // Expected result
  const expected = {
    average: 4,
    min: 1,
    max: 8,
    length: 6,
  };

  expect(object).toEqual(expected); // Use toEqual for deep comparison
});

test("analyzeArray returns the correct object for the input array", () => {
  const object = analyzeArray([1, 2, 3, 4, 5, 6, 7]);

  // Expected result
  const expected = {
    average: 4,
    min: 1,
    max: 7,
    length: 7,
  };

  expect(object).toEqual(expected); // Use toEqual for deep comparison
});

test("analyzeArray returns the correct object for the input array", () => {
  const object = analyzeArray([0, 12, 3, 1, 2, 6]);

  // Expected result
  const expected = {
    average: 4,
    min: 0,
    max: 12,
    length: 6,
  };

  expect(object).toEqual(expected); // Use toEqual for deep comparison
});
