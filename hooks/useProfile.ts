import { getProfile, getTravels } from "@/services/api";
import { useEffect, useState } from "react";
import useToken from "./useToken";
import { events } from "@/utils/events";

export default function() {
    const { token } = useToken();
    const [profile, setProfile] = useState(null);
    const [travels, setTravels] = useState([]);
    
    useEffect(() => {
        if (!token) return;
        getProfile(token).then(setProfile);
        getTravels(token).then(setTravels);
    }, [token]);

    useEffect(() => {
        events.on("update_profile", () => getProfile(token).then(setProfile));
        return () => events.off("update_profile", () => getProfile(token).then(setProfile));
    }, [token]);

    useEffect(() => {
        events.on("update_travels", () => getTravels(token).then(setTravels));
        return () => events.off("update_travels", () => getTravels(token).then(setTravels));
    }, [token]);

    return { travels, profile };
}