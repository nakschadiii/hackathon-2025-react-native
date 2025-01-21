import { events } from "@/utils/events";
const baseUrl = "https://back-end-ececaugsbda8geff.francecentral-01.azurewebsites.net";

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

export const calculateCO2 = async (token, origin, destination) => {
    const req = await fetch(`${baseUrl}/CalculateCO2`, {
        headers: { "Content-Type": "application/json", "Authorization": `Bearer ${token}` },
        method: "POST",
        body: JSON.stringify({
            "itinerary": [
                origin,
                destination
            ],
        })
    });
    const res = await req.json();
    return res;
}

export const addTravel = async (token, origin, destination, transportType, co2) => {
    const body = JSON.stringify({
        "startLocation": origin,
        "endLocation": destination,
        "distance": 0,
        "duration": 0,
        "CO2": co2,
        "TransportType": transportType
    });

    const req = await fetch(`${baseUrl}/travels`, {
        headers: { "Content-Type": "application/json", "Authorization": `Bearer ${token}` },
        method: "POST",
        body
    });

    const res = await req.json();

    events.emit('toast_success', 'Travel added');
    events.emit('update_profile');
    events.emit('update_travels');
    events.emit('reset_results');
    return res;
}

export const getTravels = async (token) => {
    const req = await fetch(`${baseUrl}/travels`, {
        headers: { "Content-Type": "application/json", "Authorization": `Bearer ${token}` }
    });
    const res = await req.json();
    return res;
}