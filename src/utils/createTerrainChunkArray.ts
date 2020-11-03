import { getTerrainChunk } from "./getTerrainChunk";

// Split terrain to array of terrain chunks
export const createTerrainChunkArray = (
  terrain: number[],
  updateChunkArray: (chunk: number[]) => void
) => {
  let partialTerrain: number[] = [...terrain];
  while (partialTerrain.length > 0) {
    partialTerrain = [...getTerrainChunk(partialTerrain, updateChunkArray)];
    if (!partialTerrain || partialTerrain.length < 3) {
      break;
    }
  }
};
