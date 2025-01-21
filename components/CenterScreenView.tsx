import { View } from "react-native";
import tw from "twrnc";

export default function({ children }) {
    return <View style={tw`flex-1 items-center justify-center w-full relative`}>
        {children}
    </View>
}