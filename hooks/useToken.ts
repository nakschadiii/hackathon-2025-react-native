import { events } from "@/utils/events";
import { useEffect, useState } from "react";

export default function() {
    const [init, setInit] = useState(false);
    const [token, setToken] = useState(null);

    useEffect(() => {
        events.emit("cache_data_listen", "token", (token) => {
            setToken(token);
            setInit(true);
        });
    }, []);

    return { token, init };
}