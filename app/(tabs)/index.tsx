import React from "react";
import { Button, ScrollView, Text, Theme, View, XStack, YStack } from "tamagui";
import {
  CurrenciesList,
  CurrenciesTrendingList,
  ScreenHeader,
  SortingBar,
} from "../../components";
import Mapbox from "@rnmapbox/maps";

//@ts-ignore
Mapbox.setAccessToken('sk.eyJ1IjoiZnJpc3R5ciIsImEiOiJjbHFkdXNhbGswN3J5MmtudXhqd3AxMmluIn0.WxOMyLMZJMhW-TjfuP_XHQ');

export default function TabOneScreen() {
  return (
    <React.Fragment>
      <ScreenHeader />

      <ScrollView>
        <Theme name="green">
          <YStack mx="$3">
            <XStack justifyContent="space-between" alignItems="center">
              <Text fontSize="$8">Trending</Text>

              <Button chromeless color="$green8">
                See more
              </Button>
            </XStack>

            <View width="100%" height='$size.15'>
              <Mapbox.MapView
                style={{ flex: 1 }}
                zoomEnabled
                attributionEnabled={false}
                logoEnabled={false}
                compassEnabled={true}
                scaleBarEnabled={false}
              />
            </View>
          </YStack>
        </Theme>
      </ScrollView>
    </React.Fragment>
  );
}
