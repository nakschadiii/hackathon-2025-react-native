import { useNavigation } from "@react-navigation/native";
import { Image, View } from "react-native";
import tw from "twrnc";
import Button from "./Button";
import Ionicons from '@expo/vector-icons/Ionicons';
import { useTheme } from "@/utils/theme";

export default function(){
    const navigation = useNavigation();
    const iconSize = 32
    const { text } = useTheme();

    return <View style={tw`p-4 pb-0 justify-between flex flex-row`}>
        <Image source={require('@/assets/logo_black.png')} style={tw`w-28 h-12`} />
        <Button style={tw`bg-[#0000]`} onPress={() => navigation.navigate("settings")}>
            <Ionicons name="settings-sharp" size={iconSize} color={tw`text-${text}`.color} />
        </Button>
    </View>
}