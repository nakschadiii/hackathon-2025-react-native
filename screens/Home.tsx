import PageScreenView from "@/components/PageScreenView";
import { useTheme } from "@/utils/theme";
import tw from "twrnc";
import { useNavigation } from "@react-navigation/native";
import { useEffect } from "react";
import MapScreen from "@/components/MapScreen";
import Card from "@/components/Card";
import useGrid from "@/hooks/useGrid";
import ProfileScreen from "@/components/ProfileScreen";
import Navbar from "@/components/Navbar";

export default function() {
    const { primary, primaryText, background, text, accent } = useTheme();
    const navigation = useNavigation();
    const { cols: {map, widgets}, Grid } = useGrid();

    useEffect(() => {
        navigation.setOptions({
            cardStyle: tw`bg-${background}`,
            headerShown: false
        })
    }, [primary, navigation])

    return <PageScreenView>
        <Navbar />
        <Grid style={tw`p-4 gap-6`}>
            <Card style={[tw`w-full h-full p-0 overflow-hidden bg-${primary}`, { flex: map }]}>
                <MapScreen header={true} />
            </Card>
            <ProfileScreen style={{ flex: widgets }} />
        </Grid>
    </PageScreenView>
}