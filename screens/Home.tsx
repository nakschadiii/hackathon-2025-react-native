import PageScreenView from "@/components/PageScreenView";
import { useTheme } from "@/utils/theme";
import tw from "twrnc";
import { useNavigation } from "@react-navigation/native";
import { useEffect } from "react";
import MapScreen from "@/components/MapScreen";
import Card from "@/components/Card";
import { View } from "react-native";
import { useWindowWidth } from "@/hooks/useScreen";

export default function() {
    const { primary, primaryText, background, text, accent } = useTheme();
    const navigation = useNavigation();

    const width = useWindowWidth();
    
    const cols = {
        [width>=600 && width<800]: [6,6],
        [width>=800 && width<1200]: [6,6],
        [width>=1200 && width<1400]: [6,6],
        [width>=1400]: [4,8]
    }[true];

    useEffect(() => {
        navigation.setOptions({
            cardStyle: tw`bg-${background}`,
            headerShown: false
        })
    }, [primary, navigation])

    return <PageScreenView>
        <View style={[tw`p-4 flex-row`, { flex: 12 }]}>
            <Card style={[tw`w-full h-full p-0 overflow-hidden bg-${primary}`, { flex: cols[0] }]}>
                <MapScreen header={true} />
            </Card>
            <View style={{ flex: cols[1] }} />
        </View>
    </PageScreenView>
}