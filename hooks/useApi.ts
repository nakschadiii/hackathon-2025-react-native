import { events } from "@/utils/events";
import { handleLogin, handleSignUp } from "@/services/api";
import { useEffect } from "react";

export default function() {
    useEffect(() => {
        events.on("login_form_submit", handleLogin);
        events.on("signup_form_submit", handleSignUp);
        return () => {
            events.off("login_form_submit", handleLogin);
            events.off("signup_form_submit", handleSignUp);
        }
    }, []);
}