import { Text, View } from "react-native"
import Button from "../Button"
import tw from "twrnc"
import { useTheme } from "@/utils/theme"
import { MaterialIcons } from '@expo/vector-icons';
import Geolocation from "@react-native-community/geolocation";
import { events } from "@/utils/events";

export const MyPosition = () => {
    const { accent } = useTheme();
    const getPosition = () => {
        Geolocation.getCurrentPosition(({ coords: { latitude, longitude } }) => {
            events.emit("set_origin_to_current_position", latitude, longitude);
        })
    }
    

    return <Button style={tw`bg-[#0000] text-${accent} px-4 items-center justify-center`} onPress={getPosition}>
        <View style={tw`flex-row items-center justify-center gap-1`}>
            <MaterialIcons name="my-location" size={14} color={tw`text-${accent}`.color} />
            <Text style={tw`text-${accent}`}>Ma position</Text>
        </View>
    </Button>
}