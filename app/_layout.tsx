import FontAwesome from "@expo/vector-icons/FontAwesome";
import { DefaultTheme, ThemeProvider } from "@react-navigation/native";
import { useFonts } from "expo-font";
import { SplashScreen, Stack } from "expo-router";
import { useEffect } from "react";
import { TamaguiProvider } from "tamagui";
import tamaguiConfig from "../tamagui.config";
import { QueryClientProvider } from "@tanstack/react-query";
import { queryClientConfig } from "../query-client.config";

export {
  // Catch any errors thrown by the Layout component.
  ErrorBoundary,
} from "expo-router";

export const unstable_settings = {
  initialRouteName: "(tabs)",
};

// Prevent the splash screen from auto-hiding before asset loading is complete.
SplashScreen.preventAutoHideAsync();

export default function RootLayout() {
  const [loaded, error] = useFonts({
    SpaceMono: require("../assets/fonts/SpaceMono-Regular.ttf"),
    ...FontAwesome.font,
    Inter: require("@tamagui/font-inter/otf/Inter-Medium.otf"),
    InterBold: require("@tamagui/font-inter/otf/Inter-Bold.otf"),
    UbuntuBold: require("../assets/fonts/Ubuntu/Ubuntu-Bold.ttf"),
    UbuntuBoldItalic: require("../assets/fonts/Ubuntu/Ubuntu-BoldItalic.ttf"),
    UbuntuItalic: require("../assets/fonts/Ubuntu/Ubuntu-Italic.ttf"),
    UbuntuLight: require("../assets/fonts/Ubuntu/Ubuntu-Light.ttf"),
    UbuntuLightItalic: require("../assets/fonts/Ubuntu/Ubuntu-LightItalic.ttf"),
    UbuntuMedium: require("../assets/fonts/Ubuntu/Ubuntu-Medium.ttf"),
    UbuntuMediumItalic: require("../assets/fonts/Ubuntu/Ubuntu-MediumItalic.ttf"),
    UbuntuRegular: require("../assets/fonts/Ubuntu/Ubuntu-Regular.ttf"),
  });

  // Expo Router uses Error Boundaries to catch errors in the navigation tree.
  useEffect(() => {
    if (error) throw error;
  }, [error]);

  useEffect(() => {
    if (loaded) {
      SplashScreen.hideAsync();
    }
  }, [loaded]);

  if (!loaded) {
    return null;
  }

  return <RootLayoutNav />;
}

function RootLayoutNav() {
  return (
    <QueryClientProvider client={queryClientConfig}>
      <ThemeProvider value={DefaultTheme}>
        <TamaguiProvider config={tamaguiConfig} defaultTheme="light">
          <Stack>
            <Stack.Screen name="(tabs)" options={{ headerShown: false }} />
          </Stack>
        </TamaguiProvider>
      </ThemeProvider>
    </QueryClientProvider>
  );
}
