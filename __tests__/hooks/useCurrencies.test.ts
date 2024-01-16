import { renderHook, waitFor } from '@testing-library/react-native';
import { useCurrencies } from '../../hooks/useCurrencies';

// Mock axios
jest.mock('axios');

describe('useCurrencies hook', () => {

    test('Should return a valid array', async () => {
        const { result } = renderHook(() => useCurrencies, {
        })
        await waitFor(() => result.current);
    })
});
