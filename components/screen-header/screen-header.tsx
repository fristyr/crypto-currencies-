import { FC } from "react";
import { Button, Input, Theme, XStack } from "tamagui";
import { SafeAreaView } from "react-native-safe-area-context";
import { Search } from "@tamagui/lucide-icons";

export const ScreenHeader: FC = () => {
  return (
    <SafeAreaView>
      <Theme name="green">
        <XStack alignItems="center" space="$2" mx='$3'>
          <Input flex={2}  size="$5" placeholder='Example: Bitcoin'  />
          <Button  size="$5" icon={Search} />
        </XStack>
      </Theme>
    </SafeAreaView>
  );
};
