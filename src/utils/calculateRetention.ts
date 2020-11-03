import { createTerrainChunkArray } from "./createTerrainChunkArray";
import { calculateChunkRetention } from "./calculateChunkRetention";
import { removeHighestOrphans } from "./removeHighestOrphans";

const terrainChunkArray: number[][] = [];

const updateChunkArray = (chunk: number[]) => {
  if (chunk.length === 0) {
    terrainChunkArray.length = 0;
  } else {
    terrainChunkArray.push(chunk);
  }
};

// Get retention of given terrain
export const calculateRetention = (terrain: number[]) => {
  updateChunkArray([]);
  const terr = removeHighestOrphans(terrain);
  createTerrainChunkArray(terr, updateChunkArray);

  let retention: number = 0;
  for (let i: number = 0; i < terrainChunkArray.length; i++) {
    retention += calculateChunkRetention(terrainChunkArray[i]);
  }
  return retention;
};
