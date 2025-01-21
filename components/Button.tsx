import { Pressable, Text } from "react-native";
import tw from "twrnc";

export default function ({ children, style, ...props }) {
    return <Pressable style={({ pressed }) => [{ opacity: pressed ? 0.5 : 1 }, tw`bg-blue-500 rounded-lg p-2`, style]} {...props}>
        <Text style={tw`text-[${style?.color || "white"}] text-center`}>{children}</Text>
    </Pressable>
}