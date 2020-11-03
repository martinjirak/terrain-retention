// Find item which sibling is smaller
export const findPeek = (terrain: number[]) => {
  for (let i: number = 0; i < terrain.length; i++) {
    if (terrain[i] > terrain[i + 1]) {
      return terrain[i];
    }
  }
};
