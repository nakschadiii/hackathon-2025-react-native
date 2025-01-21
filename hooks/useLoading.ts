import { events } from "@/utils/events";
import { useEffect, useState } from "react";

export default function () {
    const [loading, update] = useState(false);

    useEffect(() => {
        events.on("loading_change", update);
        return () => {
            events.off("loading_change", update);
        }
    });
    return loading;
}