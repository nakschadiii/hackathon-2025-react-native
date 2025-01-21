import { View } from "react-native";
import tw from "twrnc";

export default function({ children, style }) {
    return <View style={[tw`bg-white rounded-[2rem] p-6 shadow-xl`, style]}>
        {children}
    </View>
}