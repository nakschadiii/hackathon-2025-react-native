import { useNavigation } from "@react-navigation/native"
import { View } from "react-native";
import tw from "twrnc";
import Button from "./Button";
import MaterialIcons from '@expo/vector-icons/MaterialIcons';
import Ionicons from '@expo/vector-icons/Ionicons';
import { useTheme } from "@/utils/theme";

export default function() {
    const navigation = useNavigation();
    const { primaryText } = useTheme();
    const iconSize = 20;

    return <View style={tw`flex-row items-center justify-end px-4`}>
        {/* <Button style={tw`bg-[#0000]`} onPress={() => navigation.navigate("home")}>
            <MaterialIcons name="home" size={18} color={tw`text-${primaryText}`.color} />
        </Button>
        <Button style={tw`bg-[#0000]`} onPress={() => navigation.navigate("profile")}>
            <MaterialIcons name="person" size={18} color={tw`text-${primaryText}`.color} />
        </Button> */}
        <Button style={tw`bg-[#0000]`} onPress={() => navigation.navigate("settings")}>
            <Ionicons name="settings-sharp" size={iconSize} color={tw`text-${primaryText}`.color} />
        </Button>
    </View>
}