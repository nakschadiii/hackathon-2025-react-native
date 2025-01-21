import { Pressable, View } from "react-native";
import tw from "twrnc";
import { Text } from "react-native";
import { FontAwesome } from "@expo/vector-icons";
import { FontAwesome5 } from "@expo/vector-icons";
import { AntDesign } from "@expo/vector-icons";
import prettyNum from "pretty-num";
import { events } from "@/utils/events";

export function Panel({ k, value }) {
    const sizeIcon = 20;

    const {color, icon, label} = {
        bikingFootprint: { color: "blue-500", icon: <FontAwesome name="bicycle" size={sizeIcon} color="white" />, label: "Vélo" },
        busFootprint: { color: "yellow-500", icon: <FontAwesome name="bus" size={sizeIcon} color="white" />, label: "Bus" },
        carFootprint: { color: "green-500", icon: <FontAwesome name="car" size={sizeIcon} color="white" />, label: "Voiture" },
        planeFootprint: { color: "red-500", icon: <FontAwesome name="plane" size={sizeIcon} color="white" />, label: "Avion" },
        trainFootprint: { color: "blue-500", icon: <FontAwesome name="train" size={sizeIcon} color="white" />, label: "Train" },
        truckFootprint: { color: "yellow-500", icon: <FontAwesome name="truck" size={sizeIcon} color="white" />, label: "Camion" },
        walkingFootprint: { color: "green-500", icon: <FontAwesome5 name="walking" size={sizeIcon} color="white" />, label: "Marche" },
    }[k];


    return <View style={tw`flex-row items-center justify-between gap-1`}>
        <View style={[tw`flex-1 bg-${color} flex-row items-center justify-start gap-2 p-2 rounded-lg`]}>
            {icon}
            <Text style={tw`text-white`}>{label}</Text>
            <Text style={tw`text-white`}>{prettyNum(Math.round(value), {thousandsSeparator: ' ', separateOneDigit: true})}g CO<Text style={[tw`text-xs`]}>2</Text></Text>
        </View>
        <Pressable style={tw`bg-${color} flex-row items-center justify-center gap-2 p-2 rounded-lg`} onPress={() => events.emit("add_travel", k.replace("Footprint", ""), value) }>
            <AntDesign name="plus" size={18} color="white" />
        </Pressable>
    </View>
}