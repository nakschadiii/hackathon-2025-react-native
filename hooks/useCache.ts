import { events } from "@/utils/events";
import { useEffect } from "react";
import { getData, removeData, storeData } from "@/services/cache";

export default function() {
    useEffect(() => {
        const get = async (key, callback) => callback(await getData(key));
        const listen = async (key, callback) => {
            callback(await getData(key));
            events.on("cache_data_change", (k, value) => {
                if (key === k) callback(value);
            });
        }
        const set = async (key, value, callback) => {
            await storeData(key, value);
            events.emit("cache_data_change", key, value);
            if (callback) callback(true);
        }
        const rmv = async (key, callback) => {
            await removeData(key);
            events.emit("cache_data_change", key, undefined);
            if (callback) callback(true);
        }

        events.on("cache_data_get", get);
        events.on("cache_data_listen", listen);
        events.on("cache_data_set", set);
        events.on("cache_data_rmv", rmv);

        return () => {
            events.off("cache_data_get", get);
            events.off("cache_data_listen", listen);
            events.off("cache_data_set", set);
            events.off("cache_data_rmv", rmv);
        }
    }, []);
}