import { SafeAreaView, View } from "react-native";
import Title from "@/components/Title";
import Results from "@/components/Results";
import SearchFormCard from "@/components/SearchFormCard";
import { useTheme } from "@/utils/theme";
import tw from "twrnc";
import { useContext } from "react";
import AppContext from "@/navigation/context";

export default function({ header=false }) {
    const { primary, primaryText } = useTheme();
    const { profile } = useContext(AppContext);

    return <SafeAreaView style={tw`flex-1 w-full gap-2 h-full`}>
        <View style={[tw`flex p-4 bg-${primary}`]}>
            <View style={[tw`flex gap-2 w-full ${!header ? "-mt-[100]" : "-mt-[50]"}`, { transform : [{ translateY : 100 }] } ]}>
                <Title level={4} style={tw`text-${primaryText}`}>Bonjour, {profile?.username}</Title>
                <SearchFormCard />
            </View>
        </View>
        <Results />
    </SafeAreaView>
}