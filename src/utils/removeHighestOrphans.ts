export const removeHighestOrphans = (terrain: number[]) => {
  const terr = [...terrain];

  while (terr.length > 1) {
    const highestNumber = Math.max.apply(0, terr);
    const count = terr.reduce(
      (a: number, b: number) => a + Number(b === highestNumber),
      0
    );

    if (count > 1) {
      break;
    }

    terr.splice(
      terr.findIndex((item: number) => item === highestNumber),
      1
    );
  }

  return terr;
};
