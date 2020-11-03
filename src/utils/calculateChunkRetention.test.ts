import { calculateChunkRetention } from "./calculateChunkRetention";

// invalid chunk arrays
const invChunk0 = [] as number[];
const invChunk1 = [1];
const invChunk2 = [1, 2];

// valid arrays
const chunk1 = [3, 1, 2];
const chunk2 = [
  99,
  46,
  0,
  74,
  56,
  3,
  59,
  10,
  52,
  85,
  37,
  6,
  3,
  2,
  68,
  32,
  11,
  76,
  89,
  43,
  35,
  11,
  64,
  8,
  5,
  62,
  1,
  47,
  0,
  1,
  1,
  49,
  25,
  27,
  38,
  78,
  80,
  3,
  6,
  25,
  2,
  98
];

it("It should be return 0 if chunk array is not valid ", () => {
  expect(calculateChunkRetention(invChunk0)).toBe(0);
  expect(calculateChunkRetention(invChunk1)).toBe(0);
  expect(calculateChunkRetention(invChunk2)).toBe(0);
});

it("It should be return 1 for [3,1,2] ", () => {
  expect(calculateChunkRetention(chunk1)).toBe(1);
});

it("It should be return 2600 for chunk2 ", () => {
  expect(calculateChunkRetention(chunk2)).toBe(2600);
});
