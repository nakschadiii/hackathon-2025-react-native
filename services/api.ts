import { events } from "@/utils/events";
import { Platform } from "react-native";
const baseUrl = Platform.OS === "web" ? "http://localhost" : "https://5fec-80-70-37-74.ngrok-free.app";

export const handleLogin = async (form) => {
    try {
        const req = await fetch(`${baseUrl}/login`, {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(form)
        });
        const { error, token } = await req.json();
        if (error) return setTimeout(() => {
            events.emit("loading_change", false);
            events.emit('toast_error', 'Error login : ' + error);
        }, 3000);

        events.emit("cache_data_set", "token", token);
        events.emit("loading_change", false);
        events.emit('toast_success', 'Login success');
    } catch (error) {
        console.log("Error while logging in", error);
    }
};

export const handleSignUp = async (form) => {
    try {
        const req = await fetch(`${baseUrl}/user`, {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(form)
        });
        const { error, token } = await req.json();
        if (error) return setTimeout(() => {
            events.emit("loading_change", false);
            events.emit('toast_error', 'Error signup : ' + error);
        }, 3000);
    
        events.emit("cache_data_set", "token", token);
        events.emit("loading_change", false);
        events.emit('toast_success', 'Signup success');
    } catch (error) {
        console.log("Error while signing up", error);
    }
};

export const handleLogout = async () => {
    events.emit("cache_data_rmv", "token");
};

export const getProfile = async (token) => {
    const req = await fetch(`${baseUrl}/profile`, {
        headers: { "Content-Type": "application/json", "Authorization": `Bearer ${token}` }
    });
    const res = await req.json();
    return res;
};