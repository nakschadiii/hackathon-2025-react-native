import { ScrollView, Text, View } from "react-native";
import Card from "./Card";
import Title from "./Title";
import { useContext } from "react";
import AppContext from "@/navigation/context";
import tw from "twrnc";
import prettyNum from "pretty-num";

export default function({ style }) {
    const { travels } = useContext(AppContext);

    const table = [
        ["Départ", ...travels?.map(travel => travel.startLocation)],
        ["Arrivée", ...travels?.map(travel => travel.endLocation)],
        ["CO2 (g)", ...travels?.map(travel => `${prettyNum(Math.round(travel.co2), {thousandsSeparator: ' ', separateOneDigit: true})}`)],
        ["Transport", ...travels?.map(travel => travel.transportType)],
        ['Date', ...travels?.map(travel => new Date(travel.date).toUTCString())],
    ]

    return <Card style={[style, tw`gap-2`]}>
        <Title level={2}>Historique</Title>

        <ScrollView horizontal contentContainerStyle={tw`flex flex-row gap-2 items-center`}>
            {table.map((row, index) => <View key={index} style={tw`flex flex-col gap-2 items-start ${index !== 0 ? "border-l-2 border-gray-200" : ""} min-w-1/5`}>
                {row.map((cell, index) => <Text key={index} style={tw`px-2 ${index === 0 ? "font-bold border-b-2 border-gray-200 w-full" : ""}`}>{cell}</Text>)}
            </View>)}
        </ScrollView>
    </Card>
}