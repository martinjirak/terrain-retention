import { findPeek } from "./findPeek";
import { removeHighestOrphans } from "./removeHighestOrphans";

// Create terrain chunk between two peeks
export const getTerrainChunk = (
  terrain: number[],
  updateChunkArray: (chunk: number[]) => void
) => {
  const terr = [...terrain];
  const firstPeek: number | undefined = findPeek(terr);
  if (firstPeek !== undefined) {
    const indexOfPeek = terr.indexOf(firstPeek);

    terr.splice(0, indexOfPeek + 1);
    let index = terr.findIndex((item: number) => {
      return item >= firstPeek;
    });
    if (index > -1) {
      const tempTerrain = terr.slice(0, index + 1);
      tempTerrain.unshift(firstPeek);
      updateChunkArray(tempTerrain);
      terr.splice(0, index);
    } else {
      return [];
    }
  }

  return removeHighestOrphans(terr);
};
