import { calculateCO2 } from "@/services/api";
import { useEffect } from "react";
import useToken from "./useToken";
import { events } from "@/utils/events";

export default function() {
    const { token } = useToken();
    
    useEffect(() => {
        if (!token) return;
        events.on("calculateCO2", (origin, destination) => calculateCO2(token, origin, destination).then(console.log));
    }, [token]);

    return;
}