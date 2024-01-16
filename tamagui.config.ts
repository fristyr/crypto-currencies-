// the v2 config imports the css driver on web and react-native on native

// for reanimated: @tamagui/config/v2-reanimated

// for react-native only: @tamagui/config/v2-native

import { config } from '@tamagui/config/v2-reanimated'
import { createAnimations } from '@tamagui/animations-moti'

import { createTamagui } from 'tamagui'
const tamaguiConfig = createTamagui({
    ...config,
    animations: createAnimations({
        fast: {
            type: 'spring',
            damping: 20,
            mass: 1.2,
            stiffness: 250,
        },
        medium: {
            type: 'spring',
            damping: 10,
            mass: 0.9,
            stiffness: 100,
        },
        slow: {
            type: 'spring',
            damping: 20,
            stiffness: 60,
        },
    }),
   

})
// this makes typescript properly type everything based on the config

type Conf = typeof tamaguiConfig

declare module 'tamagui' {

    interface TamaguiCustomConfig extends Conf { }

}
export default tamaguiConfig
// depending on if you chose tamagui, @tamagui/core, or @tamagui/web

// be sure the import and declare module lines both use that same name
