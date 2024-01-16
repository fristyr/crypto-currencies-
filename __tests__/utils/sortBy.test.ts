import { currenciesMock } from '../../__mocks__/currencies';
import { Currency } from '../../types/currencies';
import { sortBy } from '../../utils';

describe('SortBy algorithm', () => {
    let currencies: Currency[]

    beforeEach(() => {
        currencies = currenciesMock
    });

    test('should return an array', () => {
        const result = sortBy([...currencies], 'id');
        expect(Array.isArray(result)).toBe(true);
    });

    test('should correctly sort the array by specified property', () => {
        const result = sortBy([...currencies], 'name');
        for (let i = 0; i < result.length - 1; i++) {
            expect(result[i].name <= result[i + 1].name).toBe(true);
        }
    });

    test('should maintain stability in sorting', () => {
        const mockCurrencies = [
          { id: 'a', code: 'aave' },  
          { id: 'b', code: 'ada' },
          { id: 'c', code: 'algo' }, 
        ];
      
        const result = sortBy(mockCurrencies, 'code');
      
        const firstUSDIndex = result.findIndex(currency => currency.id === 'a');
        const secondUSDIndex = result.findIndex(currency => currency.id === 'c');
      
        expect(secondUSDIndex).toBeGreaterThan(firstUSDIndex); 
      });

    test('should handle empty arrays', () => {
        const result = sortBy([], 'id');
        expect(result).toEqual([]);
    });

    test('should handle single element arrays', () => {
        const singleElementArray = [currencies[0]];
        const result = sortBy(singleElementArray, 'id');
        expect(result).toEqual(singleElementArray);
    });

});
