import { FC } from "react";
import { useWindowDimensions } from "react-native";
import { Spinner, View, YStack, useMedia } from "tamagui";
import { useCurrencies } from "../../hooks/useCurrencies";
import { CoinCard } from "../coin-card/coin-card";
import { FlashList } from "@shopify/flash-list";
import { useStore } from "../../store/store";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { testProps } from "../../utils/testProps";

export const CurrenciesTrendingList: FC = () => {
  const {
    data: currencies,
    isLoading,
    isError,
  } = useCurrencies({ sortType: "trending" });
  const TAG = "CurrenciesTrendingList";

  const { height } = useWindowDimensions();
  const { top } = useSafeAreaInsets();

  //Height will be 35% of screen height
  const listWrapperHeight = Math.trunc((height * 35) / 100 - top);

  return (
    <>
      {!isLoading && !isError && currencies && (
        <View height={listWrapperHeight} width="100%">
          <FlashList
            data={currencies}
            renderItem={({ item, index }) => (
              <View
                {...testProps(`${TAG} item ${index}`)}
                pr={index % 2 == 0 ? "$3" : 0}
                flex={1}
              >
                <CoinCard currency={item} />
              </View>
            )}
            estimatedItemSize={150}
            numColumns={2}
            disableAutoLayout
          />
        </View>
      )}
    </>
  );
};

export const CurrenciesList: FC = () => {
  const TAG = "CurrenciesList";

  const media = useMedia();
  const currentSort = useStore((state) => state.currencySortingMethod);
  const {
    data: currencies,
    isLoading,
    isError,
  } = useCurrencies({ sortType: currentSort });

  const { height } = useWindowDimensions();
  const { top } = useSafeAreaInsets();

  //Height will be 65% of screen height
  const listWrapperHeight = Math.trunc((height * 65) / 100 - top);

  return (
    <YStack mx="$2" height={listWrapperHeight * 3} space="$2">
      {isLoading && <Spinner size="large" color="$green8" />}

      {!isLoading && !isError && currencies && (
        <FlashList
          data={currencies}
          renderItem={({ item, index }) => {
            return (
              <View
                {...testProps(`${TAG} item ${index}`)}
                mr={index % 2 == 0 && media.gtXs  ? "$3" : 0}
                flex={1}
              >
                <CoinCard currency={item} />
              </View>
            );
          }}
          estimatedItemSize={150}
          // gtMd means greater then MD
          // https://tamagui.dev/docs/core/use-media
          // Which means that on the tablet size and higher it will be 2 columns
          // And mobile version will have just 1 column
          numColumns={media.gtXs ? 2 : 1}
        />
      )}
    </YStack>
  );
};
