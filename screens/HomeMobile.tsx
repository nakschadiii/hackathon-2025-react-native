import PageScreenView from "@/components/PageScreenView";
import { useTheme } from "@/utils/theme";
import tw from "twrnc";
import { useNavigation } from "@react-navigation/native";
import { useEffect } from "react";
import MiniNav from "@/components/MiniNav";
import MapScreen from "@/components/MapScreen";
import { Image } from "react-native";
import Logo from "@/components/Logo";

export default function() {
    const { primary, primaryText } = useTheme();
    const navigation = useNavigation();

    useEffect(() => {
        navigation.setOptions({
            cardStyle: tw`bg-${primary}`,
            headerStyle: tw`bg-${primary}`,
            headerTitleStyle: tw`text-${primaryText}`,
            headerTintColor: tw`text-${primaryText}`,
            headerShadowVisible: false,
            headerTitle: "",
            headerRight: () => <MiniNav />,
            headerLeft: () => <Logo color={"white"} />
        })
    }, [primary, navigation])

    return <PageScreenView>
        <MapScreen />
    </PageScreenView>
}