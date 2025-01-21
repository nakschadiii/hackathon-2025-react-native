import { View } from "react-native";
import { ScrollView } from "react-native-gesture-handler";
import tw from "twrnc";

export default function({ children }) {
    return <ScrollView style={tw`flex-1 w-full relative`} contentContainerStyle={tw`flex-1 w-full relative`}>
        {children}
    </ScrollView>
}