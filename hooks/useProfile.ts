import { getProfile } from "@/services/api";
import { useEffect, useState } from "react";
import useToken from "./useToken";
import { events } from "@/utils/events";

export default function() {
    const { token } = useToken();
    const [profile, setProfile] = useState(null);
    
    useEffect(() => {
        if (!token) return;
        getProfile(token).then(setProfile);
    }, [token]);

    useEffect(() => {
        events.on("update_profile", () => getProfile(token).then(setProfile));
    }, [token]);

    return profile;
}