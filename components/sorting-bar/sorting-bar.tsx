import { FC, useState } from "react";
import { Button, ScrollView, Text } from "tamagui";
import { YStack } from "tamagui";
import {
  ArrowDownAZ,
  ArrowDownNarrowWide,
  Flag,
  Shuffle,
  TestTube2,
} from "@tamagui/lucide-icons";
import type { IconProps } from "@tamagui/helpers-icon";
import { useStore } from "../../store/store";
import { UserSlice } from "../../store/slices";
import { testProps } from "../../utils/testProps";

type TSortingMethod = Array<{
  method: UserSlice["currencySortingMethod"];
  label: string;
  icon: React.NamedExoticComponent<IconProps>;
}>;

const TAG = "SortingBar";

export const SortingBar: FC = () => {
  const currentSort = useStore((state) => state.currencySortingMethod);
  const setCurrencySortingMethod = useStore(
    (state) => state.setCurrencySortingMethod
  );

  const sortingMethods: TSortingMethod = [
    {
      method: "currencyName",
      label: "Name sort",
      icon: ArrowDownAZ,
    },
    {
      method: "currencySymbolOrCode",
      label: "Symbol/code sort",
      icon: ArrowDownNarrowWide,
    },
    {
      method: "unsupportedInUs",
      label: "Show US unsupported",
      icon: Flag,
    },
    {
      method: "testCurrencies",
      label: "Test Currencies",
      icon: TestTube2,
    },
    {
      method: "shuffle",
      label: "Shuffle",
      icon: Shuffle,
    },
  ];

  const onSetSortMethod = (method: UserSlice["currencySortingMethod"]) => {
    return () => setCurrencySortingMethod(method);
  };

  return (
    <YStack mx="$3">
      <Text  {...testProps(`${TAG} title`)} fontSize="$8" mb="$4">
        Discover
      </Text>
      <ScrollView horizontal space="$2" pb="$4">
        {sortingMethods.map(({ method, label, icon }, index) => (
          <Button
            {...testProps(`${TAG} button ${index}`)}
            key={method}
            onPress={onSetSortMethod(method)}
            theme={currentSort === method ? "active" : undefined}
            color={currentSort === method ? "white" : undefined}
            icon={icon}
            animation="bouncy"
            pressStyle={{ scale: 0.95 }}
          >
            {label}
          </Button>
        ))}
      </ScrollView>
    </YStack>
  );
};
