import { View, Text } from "react-native";
import tw from "twrnc";
import { MaterialIcons } from '@expo/vector-icons';
import Input from "../Input";
import InputGroup from "../InputGroup";
import Button from "../Button";
import { useTheme } from "@/utils/theme";
import Card from "../Card";
import { events } from "@/utils/events";
import useSearch from "@/hooks/useSearch";
import { useEffect, useState } from "react";
import { MyPosition } from "./MyPosition";

export default function() {
    const { primaryText, accent } = useTheme();
    const [ coordinates, setCoordinates ] = useState({ origin: null, destination: null });
    const [ current_position, setCurrentPosition ] = useState(false);
    const { origin, destination } = coordinates;
    useSearch();

    const submit = () => events.emit("calculateCO2", origin, destination);
    const update = (key, value) => setCoordinates({ ...coordinates, [key]: { address: value } });

    useEffect(() => {
        events.on('set_origin_to_current_position', (lat, lng) => {
            setCoordinates({ ...coordinates, origin: { lat, lng } });
            setCurrentPosition(true);
        });
        events.on('reset_origin', (lat, lng) => {
            setCoordinates({ ...coordinates, origin: {} });
            setCurrentPosition(false);
        });
    }, []);

    return <Card style={tw`w-full gap-2`}>
        <InputGroup style={tw`relative`}>
            {!current_position ? <View style={tw`flex-row items-center justify-between w-full gap-2`}>
                <Input placeholder="Provenance" style={tw`flex-1 w-full`} onChangeText={value => update("origin", value)} onSubmitEditing={submit} />
                <MyPosition />
            </View> : <View style={tw`flex-row items-center justify-between w-full gap-2`}>
                <Text style={tw`py-2 px-4 text-${accent}`}>Position actuelle</Text>
                <Button style={tw`bg-[#0000] text-red-500 px-4 py-2`} onPress={() => events.emit("reset_origin")}>
                    Annuler
                </Button>
            </View>}
            <Input placeholder="Destination" style={tw`flex-1 w-full`} onChangeText={value => update("destination", value)} onSubmitEditing={submit} />
        </InputGroup>
        <Button style={tw`bg-${accent} text-${primaryText}`} onPress={submit}>
            Rechercher
        </Button>
    </Card>
}