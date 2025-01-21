import { Text } from "react-native";
import tw from "twrnc";

export default function({ level="", children, style }) {
    return <Text style={[tw`text-${level}xl font-bold`, style]}>
        {children}
    </Text>
}