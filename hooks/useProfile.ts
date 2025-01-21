import { getProfile } from "@/services/api";
import { useEffect, useState } from "react";
import useToken from "./useToken";

export default function() {
    const { token } = useToken();
    const [profile, setProfile] = useState(null);
    
    useEffect(() => {
        if (!token) return;
        getProfile(token).then(setProfile);
    }, [token]);

    return profile;
}