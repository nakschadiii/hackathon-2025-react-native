import { Text, View } from "react-native";
import Card from "./Card";
import Title from "./Title";
import { useContext } from "react";
import AntDesign from '@expo/vector-icons/AntDesign';
import Octicons from '@expo/vector-icons/Octicons';
import tw from "twrnc";
import AppContext from "@/navigation/context";

export default function({ style }) {
    const { profile } = useContext(AppContext);
    const iconSize = 48;

    const Icon = () => {
        if (profile?.CO2OfMonth === profile?.CO2OfPrevMonth || profile?.CO2OfPrevMonth === null) return <Octicons name="dash" size={iconSize} color="blue" />
        if (profile?.CO2OfMonth > profile?.CO2OfPrevMonth) return <AntDesign name="arrowup" size={iconSize} color="red" />
        if (profile?.CO2OfMonth < profile?.CO2OfPrevMonth) return <AntDesign name="arrowdown" size={iconSize} color="green" />
    }

    return <Card style={style}>
        <Title level={2}>Statistiques</Title>
        <View style={tw`flex flex-row gap-2 items-center`}>
            <Icon />
            <Title level="4">{profile?.CO2OfMonth}g</Title>
            <Text>ce mois-ci</Text>
        </View>
    </Card>
}