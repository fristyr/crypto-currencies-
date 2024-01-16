import { Currency } from "../types/currencies";

export function shuffle(array: Currency[]): Currency[] {
  for (let index = 0; index < array.length; index++) {
    let temporary = array[index];
    let random = Math.floor(Math.random() * (index + 1))
    array[index] = array[random]
    array[random] = temporary
  }
  return array
}
