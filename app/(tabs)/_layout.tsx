import { Tabs } from "expo-router";
import { FC } from "react";
import { BottomTabBarProps } from "@react-navigation/bottom-tabs";
import { Button, Text, Theme, XStack } from "tamagui";
import { SafeAreaView } from "react-native-safe-area-context";
import { Settings, Home } from "@tamagui/lucide-icons";
import { testProps } from "../../utils/testProps";

const TAG = "CustomTabBar";

const CustomTabBar: FC<BottomTabBarProps> = ({
  state,
  descriptors,
  navigation,
}) => {
  return (
    <SafeAreaView edges={["bottom", "left", "right"]}>
      <Theme name="green">
        <XStack justifyContent="space-around" mx="$2" py="$2">
          {state.routes.map((route, index) => {
            const { options } = descriptors[route.key];
            const label =
              options.tabBarLabel !== undefined
                ? options.tabBarLabel
                : options.title !== undefined
                ? options.title
                : route.name;

            const isFocused = state.index === index;

            const onPress = () => {
              const event = navigation.emit({
                type: "tabPress",
                target: route.key,
                canPreventDefault: true,
              });

              if (!isFocused && !event.defaultPrevented) {
                navigation.navigate(route.name, route.params);
              }
            };

            const onLongPress = () => {
              navigation.emit({
                type: "tabLongPress",
                target: route.key,
              });
            };

            return (
              <Button
                {...testProps(`${TAG} button ${route.name}`)}
                key={route.name}
                testID={options.tabBarTestID}
                onPress={onPress}
                onLongPress={onLongPress}
                size="$5"
                borderRadius="$6"
                icon={() => {
                  return options.tabBarIcon
                    ? options.tabBarIcon({
                        color: isFocused ? "white" : "black",
                        focused: false,
                        size: 0,
                      })
                    : null;
                }}
                theme={isFocused ? "active" : undefined}
              >
                <Text color={isFocused ? "white" : "black"}>{label}</Text>
              </Button>
            );
          })}
        </XStack>
      </Theme>
    </SafeAreaView>
  );
};

export default function TabLayout() {
  return (
    <Tabs tabBar={(props) => <CustomTabBar {...props} />}>
      <Tabs.Screen
        name="index"
        options={{
          title: "Home",
          tabBarIcon: ({ color }) => <Home color={color} />,
          headerShown: false,
        }}
      />
      <Tabs.Screen
        name="two"
        options={{
          title: "Settings",
          tabBarIcon: ({ color }) => <Settings color={color} />,
          headerShown: false,
        }}
      />
    </Tabs>
  );
}
