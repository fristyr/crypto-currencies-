import { currenciesMock } from "../../__mocks__/currencies"
import { Currency } from "../../types/currencies";
import { shuffle } from "../../utils"

describe('Shuffle array algorithm', () => {
    let currencies: Currency[]

    beforeEach(() => {
        currencies = currenciesMock
      });

    test('Should return a valid array', () => {
        const result = shuffle([...currencies])
        expect(Array.isArray(result)).toBe(true);
    })

    test('Should shuffle array', () => {
        const result = shuffle([...currencies])
        expect(result).not.toEqual(currencies)
    })

    test('Should preserve array length', () => {
        const result = shuffle([...currencies])
        expect(result.length).toEqual(currencies.length)
    })

    test('Should produce different outputs on multiple runs', () => {
        const firstRun = shuffle([...currencies]);
        const secondRun = shuffle([...currencies]);
        
        expect(firstRun).not.toEqual(secondRun);
    });

    test('Should preserve array content', () => {
        const originalArrayCopy = JSON.parse(JSON.stringify(currencies));
        const result = shuffle([...currencies]);
        const sortedOriginal = (originalArrayCopy as Currency[]).sort((a, b) => a.id.localeCompare(b.id));
        const sortedResult = result.sort((a, b) => a.id.localeCompare(b.id));
        expect(sortedResult).toEqual(sortedOriginal);
    });

})  