import { Platform } from "react-native";
import { useWindowWidth } from "./useScreen";

export default () => {
    const width = useWindowWidth();
    
    return {
        isMobile: (Platform.OS === "ios" || Platform.OS === "android") || width < 768,
    }
}