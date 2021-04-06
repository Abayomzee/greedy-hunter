import { randomNumber } from "./randomNumber";

function newArr(array) {
  return [...new Set(array)];
}

export function randomPositions(length, valueRange) {
  let randomPositions = [];

  while (randomPositions.length < length) {
    let index = randomNumber(valueRange);
    randomPositions.push(index);
    randomPositions = newArr(randomPositions);
  }

  return randomPositions;
}
