import { useTheme } from "@/utils/theme";
import { View } from "react-native";
import tw from "twrnc";
import Logo from "./Logo";

export default function () {
    const { primary, background } = useTheme();
    return <View style={tw`flex flex-1 absolute top-0 left-0 right-0 bottom-0 z-[-1] w-full h-full items-center justify-start bg-${background}`}>
        <View style={tw`bg-${primary} absolute top-0 left-0 right-0 bottom-0 z-[-1] h-1/2 flex items-center justify-center`}>
            <Logo style={[tw`w-3/4 h-48 -mt-12`, { resizeMode: 'contain' }]} />
        </View>
    </View>
}