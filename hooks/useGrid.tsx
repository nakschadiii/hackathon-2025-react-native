import { useWindowWidth } from "@/hooks/useScreen";
import { View } from "react-native";
import tw from "twrnc";

export default function(){
    const width = useWindowWidth();
    const cols = {
        [width>=600 && width<800]: {map: 6, widgets: 6, widget: 12},
        [width>=800 && width<1200]: {map: 6, widgets: 6, widget: 12},
        [width>=1200 && width<1400]: {map: 6, widgets: 6, widget: 6},
        [width>=1400]: {map: 4, widgets: 8, widget: 4}
    }[true];

    const Grid = ({ children, style }) => <View style={[tw`flex-row flex-wrap`, { flex: 12 }, style]}>
        {children}
    </View>

    return { cols, Grid }
}