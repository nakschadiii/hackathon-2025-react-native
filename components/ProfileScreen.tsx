import useGrid from "@/hooks/useGrid";
import { Platform } from "react-native";
import { ScrollView } from "react-native-gesture-handler";
import tw from "twrnc"
import CO2Stats from "./CO2Stats";

export default function({ style }: { style? }) {
    const col = useGrid()?.cols?.widget;
    const width = {
        width: col 
          ? `calc(${(col / 12) * 100}% - 16px)` 
          : "100%"
      };

    return <ScrollView style={[style, tw`w-full overflow-visible`]} contentContainerStyle={[tw`flex flex-row flex-wrap gap-6 ${Platform.OS === "web" ? "-mr-4" : ""}`]}>
        <CO2Stats style={[width]} />
    </ScrollView>
}