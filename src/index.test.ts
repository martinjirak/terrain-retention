import { calculateRetention } from "./utils/calculateRetention";

const terrain1 = [4, 3, 2, 1, 1, 2, 3, 4, 5];
it("It should be return 12 for terrain1 ", () => {
  expect(calculateRetention(terrain1)).toBe(12);
});

const terrain2 = [1, 2, 3, 4, 5];
it("It should be return 0 for terrain2 ", () => {
  expect(calculateRetention(terrain2)).toBe(0);
});

const terrain3 = [5, 4, 3, 2, 1];
it("It should be return 0 for terrain3 ", () => {
  expect(calculateRetention(terrain3)).toBe(0);
});

const terrain4 = [1, 2, 3, 4, 3, 2, 1, 1, 2, 3, 4, 5, 4, 3, 2, 1];
it("It should be return 12 for terrain4 ", () => {
  expect(calculateRetention(terrain4)).toBe(12);
});

const terrain5 = [1, 2, 3, 4, 5, 4, 3, 2, 1];
it("It should be return 0 for terrain5 ", () => {
  expect(calculateRetention(terrain5)).toBe(0);
});

const terrain6 = [1, 2, 3, 2, 1, 2, 3, 2, 1, 2, 3, 4, 5];
it("It should be return 12 for terrain6 ", () => {
  expect(calculateRetention(terrain6)).toBe(8);
});

const terrain7 = [1, 2, 3, 4, 5, 4, 3, 2, 1];
it("It should be return 0 for terrain7 ", () => {
  expect(calculateRetention(terrain7)).toBe(0);
});

const terrain8 = [5, 4, 3, 2, 1, 2, 3, 4, 5];
it("It should be return 0 for terrain8 ", () => {
  expect(calculateRetention(terrain8)).toBe(16);
});

const terrain9 = [10, 6, 5, 4, 3, 2, 1, 2, 3, 4, 5];
it("It should be return 0 for terrain9 ", () => {
  expect(calculateRetention(terrain9)).toBe(16);
});

const terrain10 = [5, 4, 3, 2, 1, 2, 3, 4, 5, 50, 4, 3, 2, 1, 2, 3, 4, 5];
it("It should be return 0 for terrain10 ", () => {
  expect(calculateRetention(terrain10)).toBe(32);
});

const terrain11 = [5, 4, 3, 2, 1, 2, 3, 4, 50, 5, 4, 3, 2, 1, 2, 3, 4, 5];
it("It should be return 0 for terrain11 ", () => {
  expect(calculateRetention(terrain11)).toBe(32);
});
