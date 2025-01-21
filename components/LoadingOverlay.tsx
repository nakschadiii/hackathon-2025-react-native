import { ActivityIndicator, View } from "react-native";
import tw from "twrnc";

export default function() {
    return <View style={tw`bg-black/70 flex-1 items-center justify-center absolute w-full h-full z-50`}>
        <ActivityIndicator size={"large"} />
    </View>
}