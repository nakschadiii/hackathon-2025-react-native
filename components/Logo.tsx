import { Image } from "react-native";
import tw from "twrnc"

export default function({ color="white", style }) {
    const logo = {
        white: require(`@/assets/logo_white.png`),
        black: require(`@/assets/logo_black.png`),
        green: require(`@/assets/logo_green.png`),
    }[color]; 

    return <Image source={logo} style={[tw`w-28 h-12`, style]} />
}