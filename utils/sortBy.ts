import { Currency } from "../types/currencies";

export function sortBy(arr: Array<any>, property: keyof Currency): Currency[] {
  if (arr.length <= 1) return arr;
  const pivot = arr[0];
  const lesser = [];
  const greater = [];
  for (let i = 1; i < arr.length; i++) {
    if (arr[i][property] < pivot[property]) lesser.push(arr[i]);
    else greater.push(arr[i]);
  }
  return [...sortBy(lesser, property), pivot, ...sortBy(greater, property)];
}