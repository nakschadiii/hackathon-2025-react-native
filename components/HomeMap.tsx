import { ScrollView, Text, View } from "react-native";
import tw from "twrnc";
import { useTheme } from "@/utils/theme";
import Card from "./Card";
import { useEffect, useState } from "react";
import { events } from "@/utils/events";
import FontAwesome from '@expo/vector-icons/FontAwesome';
import { FontAwesome5 } from "@expo/vector-icons";
import prettyNum from "pretty-num";

export default function() {
    const { primary, background } = useTheme();
    const [results, setResults] = useState(null);

    useEffect(() => {
        events.on("co2_calculated", setResults);
        return () => {
            events.off("co2_calculated", setResults);
        }
    }, []);

    return <ScrollView style={[tw`flex-1 bg-${background}`, { zIndex: -99 }]} contentContainerStyle={tw`items-center justify-center flex flex-1`}>
        {results && <Card style={tw`w-3/4 gap-2`}>
            {Object.entries(results).map(([key, value]) => <Panel key={key} k={key} value={value} />)}
        </Card>}
    </ScrollView>
}

export function Panel({ k, value }) {
    const sizeIcon = 20;

    const {color, icon} = {
        bikingFootprint: { color: "blue-500", icon: <FontAwesome name="bicycle" size={sizeIcon} color="white" /> },
        busFootprint: { color: "yellow-500", icon: <FontAwesome name="bus" size={sizeIcon} color="white" /> },
        carFootprint: { color: "green-500", icon: <FontAwesome name="car" size={sizeIcon} color="white" /> },
        planeFootprint: { color: "red-500", icon: <FontAwesome name="plane" size={sizeIcon} color="white" /> },
        trainFootprint: { color: "blue-500", icon: <FontAwesome name="train" size={sizeIcon} color="white" /> },
        truckFootprint: { color: "yellow-500", icon: <FontAwesome name="truck" size={sizeIcon} color="white" /> },
        walkingFootprint: { color: "green-500", icon: <FontAwesome5 name="walking" size={sizeIcon} color="white" /> },
    }[k];


    return <View style={[tw`flex-1 bg-${color} flex-row items-center justify-start gap-2 p-2 rounded-lg`]}>
        {icon}
        <Text style={tw`text-white`}>{prettyNum(Math.round(value), {thousandsSeparator: ' ', separateOneDigit: true})}g CO<Text style={[tw`text-xs`]}>2</Text></Text>
    </View>
}