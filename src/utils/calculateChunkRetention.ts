// Calculate retention of one terrain chunk
export const calculateChunkRetention = (terrainChunk: number[]) => {
  if (terrainChunk.length < 3) {
    return 0;
  }

  terrainChunk.sort((a: number, b: number) => b - a);
  terrainChunk.shift();

  let result: number = 0;
  if (terrainChunk.length === 2) {
    result = terrainChunk[0] - terrainChunk[1];
  } else {
    for (let i: number = 1; i < terrainChunk.length; i++) {
      result += terrainChunk[0] - terrainChunk[i];
    }
  }
  return result;
};
