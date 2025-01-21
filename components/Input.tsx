import { TextInput } from "react-native";
import tw from "twrnc";

export default function({ style, ...props }) {
    return <TextInput style={[tw`py-2 px-4`, {outlineStyle: 'none'}, style]} {...props} />
}