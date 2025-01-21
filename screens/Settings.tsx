import Separator from "@/components/Separator";
import { handleLogout } from "@/services/api";
import { useTheme } from "@/utils/theme";
import { useNavigation } from "@react-navigation/native";
import { useEffect } from "react";
import { Platform, Text, View } from "react-native";
import { FlatList, TouchableHighlight } from "react-native-gesture-handler";
import tw from "twrnc";
import AntDesign from '@expo/vector-icons/AntDesign';

const settings = [
    {title: 'Deconnexion', text: 'Désactive votre session et redirige vers la page de connexion', key: 'item1', onPress: () => handleLogout(), icon: <AntDesign name="logout" size={24} color="black" />},
]

export default function() {
    const { primary, primaryText, background, text, accent } = useTheme();
    const navigation = useNavigation();
    useEffect(() => {
        navigation.setOptions({
            cardStyle: tw`bg-${background}`,
            headerStyle: tw`bg-${background}`,
            headerTitleStyle: tw`text-${text}`,
            headerTintColor: tw`text-${accent}`,
            headerShadowVisible: false,
        })
    }, [primary, navigation])

    return settings.map((item, index) => <TouchableHighlight key={item.key} onPress={() => item.onPress()}>
        <View style={tw`p-4 gap-2 overflow-hidden ${index !== settings.length - 1 ? "border-b-2 border-gray-200" : ""} flex-row items-center justify-between`}>
            {item.icon}
            <View style={tw`flex flex-col flex-1`}>
                <Text>{item.title}</Text>
                <Text style={tw`text-gray-500`}>{item.text}</Text>
            </View>
        </View>
    </TouchableHighlight>)
}