import { ScrollView } from "react-native";
import tw from "twrnc";
import { useTheme } from "@/utils/theme";
import Card from "./Card";
import { useEffect, useState } from "react";
import { events } from "@/utils/events";
import { Panel } from "./Panel";

export default function() {
    const { background } = useTheme();
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