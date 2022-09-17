import ceasar from "../functions/ceasar.js";

test("ceasar(string, shift)", () => {
  expect(ceasar("z", -1)).toBe("y");
  expect(ceasar("Z", 2)).toBe("B");
  expect(ceasar("this", 1)).toBe("uijt");
  expect(ceasar("this works", 1)).toBe("uijt xpslt");
  expect(ceasar("This, workS!", 1)).toBe("Uijt, xpslT!");
});
