import ProfileScreen from "@/components/ProfileScreen";
import { useTheme } from "@/utils/theme";
import { useNavigation } from "@react-navigation/native";
import { useEffect } from "react";
import tw from "twrnc";

export default function(){
    const navigation = useNavigation();
    const { background, text } = useTheme();

    useEffect(() => {
        navigation.setOptions({
            cardStyle: tw`bg-${background}`,
            headerStyle: tw`bg-${background}`,
            headerTitleStyle: tw`text-${text}`,
            headerTintColor: tw`text-${text}`,
            headerShadowVisible: false,
        })
    }, [background, navigation])

    return <ProfileScreen style={tw`p-4`} />
}