export interface CurrencyMetadata {
    contractAddress: string | null;
    coinType: null | string;
    chainId: string | null;
    networkCode: string;
}

export interface Currency {
    decimals: number;
    maxAmount: null| number;
    minAmount: null| number;
    minBuyAmount: number;
    maxBuyAmount: null | number;
    addressTagRegex: null | string;
    notAllowedUSStates: string[];
    notAllowedCountries: string[];
    confirmationsRequired: null | string;
    minSellAmount: number;
    maxSellAmount: number;
    id: string;
    createdAt: Date | string;
    updatedAt: Date | string;
    type: string;
    name: string;
    code: string;
    precision: number;
    isSellSupported: boolean;
    addressRegex: string;
    testnetAddressRegex: string;
    supportsAddressTag: boolean;
    supportsTestMode: boolean;
    supportsLiveMode: boolean;
    isSuspended: boolean;
    isSupportedInUS: boolean;
    metadata: CurrencyMetadata;
}