import { ArrowBigUp } from "@tamagui/lucide-icons";
import { FC, useCallback, useState } from "react";
import { Card, H2, Paragraph, Text, Theme, XStack } from "tamagui";
import { Currency } from "../../types/currencies";
import { calculatePercentageDifference } from "../../utils/calculateCurencyPercentageDifference";

export const CoinCard: FC<{ currency: Currency }> = ({ currency }) => {



  return (
    <Theme name="green">
      <Card
        size="$6"
        bordered
        mb="$2"
        animation="bouncy"
        scale={0.9}
        hoverStyle={{ scale: 0.925 }}
        pressStyle={{ scale: 0.875 }}
        flex={1}
      >
        <Card.Header px="$3" py="$2">
          <H2 fontSize="$3">{currency.name}</H2>
          <Paragraph theme="alt2" size="$3">
            {currency.code.toUpperCase()}
          </Paragraph>
        </Card.Header>

        <Card.Footer
          mx="$3"
          mb="$4"
          justifyContent="space-between"
          alignItems="center"
        >
          <Text fontSize={10}>{currency.maxSellAmount} USD</Text>
          <XStack justifyContent="center" alignItems="center">
            <ArrowBigUp size={10} />
            <Text fontSize={10}>
              {calculatePercentageDifference(
                currency.minSellAmount,
                currency.maxSellAmount
              ) &&
                calculatePercentageDifference(
                  currency.minSellAmount,
                  currency.maxSellAmount
                )}
              
            </Text>
          </XStack>
        </Card.Footer>
      </Card>
    </Theme>
  );
};
