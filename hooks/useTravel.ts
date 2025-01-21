import { addTravel, calculateCO2 } from "@/services/api";
import { useEffect, useState } from "react";
import useToken from "./useToken";
import { events } from "@/utils/events";

export default function() {
    const { token } = useToken();

    const [ coordinates, setCoordinates ] = useState({ origin: { address: null }, destination: { address: null } });
    const [ current_position, setCurrentPosition ] = useState(false);
    const { origin, destination } = coordinates;
    const submit = () => events.emit("calculateCO2", origin, destination);
    const update = (key, value) => setCoordinates({ ...coordinates, [key]: { address: value } });

    useEffect(() => {
        events.on('set_origin_to_current_position', (lat, lng) => {
            setCoordinates({ ...coordinates, origin: { lat, lng } });
            setCurrentPosition(true);
        });
        events.on('reset_origin', (lat, lng) => {
            setCoordinates({ ...coordinates, origin: {} });
            setCurrentPosition(false);
        });
    }, [coordinates]);
    
    useEffect(() => {
        if (!token) return;
        events.on("calculateCO2", (origin, destination) => calculateCO2(token, origin, destination).then(v => {
            if(!v.detail) events.emit("co2_calculated", v);
        }));
    }, [token]);

    useEffect(() => {
        const handleAddTravel = (co2, transportType) => {
            const originStr = origin.lat && origin.lng ? `lat:${origin.lat},lng:${origin.lng}` : origin.address;
            const destinationStr = destination.lat && destination.lng ? `lat:${destination.lat},lng:${destination.lng}` : destination.address;
            addTravel(token, originStr, destinationStr, co2, transportType);
        }
        events.on('add_travel', handleAddTravel);
        return () => {
            events.off('add_travel', handleAddTravel);
        }
    }, [origin, destination]);

    return { origin, destination, update, submit, current_position };
}