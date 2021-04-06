export function topIndex(hunterIndex, grid) {
  return hunterIndex - grid >= 0 ? hunterIndex - grid : null;
}
export function rightIndex(hunterIndex, grid) {
  return hunterIndex % grid !== grid - 1 ? hunterIndex + 1 : null;
}
export function leftIndex(hunterIndex, grid) {
  return hunterIndex % grid !== 0 ? hunterIndex - 1 : null;
}
export function bottomIndex(hunterIndex, grid) {
  return hunterIndex + grid < Math.pow(grid, 2) ? hunterIndex + grid : null;
}
