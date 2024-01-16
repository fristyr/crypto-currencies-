import { Currency } from "../types/currencies";

export function selectTrendingCurrencies(data: Currency[]) {
    // Check if data is an array and not empty
    if (!Array.isArray(data) || data.length === 0) {
      return [];
    }
  
    const currentDate = new Date();
    return data.filter(currency => {
      // Check if necessary fields are present
      if (!currency.updatedAt || !currency.notAllowedUSStates || !currency.notAllowedCountries) {
        return false;
      }
  
      // Convert updatedAt to a Date object for comparison
      const updatedAt = new Date(currency.updatedAt);
  
      // Calculate the number of days since the last update
      //@ts-ignore
      const daysSinceUpdate = (currentDate - updatedAt) / (1000 * 3600 * 24);
  
      // Check if the currency has been updated in the last 60 days (relaxed criteria)
      const recentlyUpdated = daysSinceUpdate <= 60;
  
      // Check for fewer geographical restrictions (relaxed criteria)
      const fewerRestrictions = currency.notAllowedUSStates.length <= 2 && currency.notAllowedCountries.length === 0;
  
      // Check for more technical features (relaxed criteria)
      const moreFeatures = currency.isSellSupported || currency.supportsLiveMode;
  
      // Select currency if it meets any of the relaxed criteria
      return recentlyUpdated || fewerRestrictions || moreFeatures;
    });
  }