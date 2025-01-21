import { handleLogout } from "@/services/api";
import { Pressable, Text } from "react-native";

export default function() {
    return <Pressable onPress={() => handleLogout()}>
        <Text>Logout</Text>
    </Pressable>
}