import { toast } from "@backpackapp-io/react-native-toast";
import { useEffect } from "react";
import { events } from "@/utils/events";

export default function() {
    useEffect(() => {
        events.on("toast_error", toast.error);
        events.on("toast_success", toast.success);
        return () => {
            events.off("toast_error", toast.error);
            events.off("toast_success", toast.success);
        }
    });
    return;
}