import { View, Text } from "react-native";
import tw from "twrnc";
import { MaterialIcons } from '@expo/vector-icons';
import Input from "../Input";
import InputGroup from "../InputGroup";
import Button from "../Button";
import { useTheme } from "@/utils/theme";
import Card from "../Card";

export default function() {
    const { primary, primaryText, accent } = useTheme();

    return <Card style={tw`w-full gap-2`}>
        <InputGroup style={tw`relative`}>
            <View style={tw`flex-row items-center justify-between w-full gap-2`}>
                <Input placeholder="Destination" style={tw`flex-1 w-full`} />
                <Button style={tw`bg-[#0000] text-${accent} px-4 items-center justify-center`} onPress={() => console.log("my position")}>
                    <View style={tw`flex-row items-center justify-center gap-1`}>
                        <MaterialIcons name="my-location" size={14} color={tw`text-${accent}`.color} />
                        <Text style={tw`text-${accent}`}>Ma position</Text>
                    </View>
                </Button>
            </View>
            <Input placeholder="Provenance" />
            {/* <Button style={[tw`rounded-full bg-white border border-gray-200 absolute right-0 top-0 bottom-0 w-8 h-8 items-center justify-center text-${primaryText}`, { zIndex: 999, transform: [{ translateX: 15 }, { translateY: -47.5 }] }]} onPress={() => console.log("search")}>
                <AntDesign name="swap" size={20} color="black" />
            </Button> */}
        </InputGroup>
        <Button style={tw`bg-${accent} text-${primaryText}`} onPress={() => console.log("search")}>
            Rechercher
        </Button>
    </Card>
}