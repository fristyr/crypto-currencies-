import { useQuery, QueryFunction } from "@tanstack/react-query";
import axios from 'axios'
import { Currency } from "../types/currencies";
import { UserSlice } from "../store/slices";
import { selectTrendingCurrencies, shuffle, sortBy } from "../utils";

const queryFn: QueryFunction<Currency[]> = ({ signal }) => {
  return axios.get<Currency[]>(`${process.env.EXPO_PUBLIC_MOONPAY_API_URL}/currencies`, {
    signal,
  }).then(response => response.data);
};

export const useCurrencies = ({ sortType = 'initial' }: {
  sortType: UserSlice["currencySortingMethod"]
}) => {
  return useQuery<Currency[]>({
    queryKey: ['currencies'],
    queryFn,
    // To avoid future use of data.data like
    //   const currencies =  useCurrencies()
    //   currencies.data.data?.code
    select: (data) => {

      // By default filter currencies with false values like isSupportedInUS and supportsTestMode
      const filteredCurrencies = data.filter(item => item.isSupportedInUS && item.supportsTestMode)

      switch (sortType) {
        case 'currencyName':
          return sortBy(filteredCurrencies, 'name');
        case 'currencySymbolOrCode':
          return sortBy(filteredCurrencies, 'code');
        case 'trending':
          return selectTrendingCurrencies(data).slice(0, 4);
        // Show not supported in US currencies  
        case 'unsupportedInUs':
          return sortBy(data, 'code').filter(item => !item.isSupportedInUS)
        // Show not supported Test currencies
        case 'testCurrencies':
          return sortBy(data, 'name').filter(item => !item.supportsTestMode)
        case 'shuffle':
          return shuffle(data)
        case 'initial':
          return filteredCurrencies;
        default:
          return filteredCurrencies;
      }
    },
  })
}
