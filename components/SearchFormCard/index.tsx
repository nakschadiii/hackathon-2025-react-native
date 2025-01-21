import { View, Text, Platform } from "react-native";
import tw from "twrnc";
import Input from "../Input";
import InputGroup from "../InputGroup";
import Button from "../Button";
import { useTheme } from "@/utils/theme";
import Card from "../Card";
import { events } from "@/utils/events";
import { MyPosition } from "./MyPosition";
import useTravel from "@/hooks/useTravel";

export default function() {
    const { primaryText, accent } = useTheme();
    const { update, submit, current_position, origin: { address: origin }, destination: { address: destination } } = useTravel();

    return <Card style={tw`w-full gap-2`}>
        <InputGroup style={tw`relative`}>
            {!current_position ? <View style={tw`flex-row items-center justify-between w-full gap-2`}>
                <Input placeholder="Provenance" style={tw`flex-1 w-full`} onChangeText={value => update("origin", value)} onSubmitEditing={submit} value={origin ?? ""} />
                <MyPosition />
            </View> : <View style={tw`flex-row items-center justify-between w-full gap-2`}>
                <Text style={tw`py-2 px-4 text-${accent}`}>Position actuelle</Text>
                <Button style={tw`bg-[#0000] text-red-500 px-4 py-2`} onPress={() => events.emit("reset_origin")}>
                    Annuler
                </Button>
            </View>}
            <Input placeholder="Destination" style={tw`flex-1 w-full px-4 ${Platform.OS === 'web' ? 'py-2' : 'py-4'}`} onChangeText={value => update("destination", value)} onSubmitEditing={submit} value={destination ?? ""} />
        </InputGroup>
        <Button style={tw`bg-${accent} text-${primaryText}`} onPress={submit}>
            Rechercher
        </Button>
    </Card>
}