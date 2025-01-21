import { events } from "@/utils/events";
import { useEffect } from "react";
import useForm from "./useForm";

export const useLogin = () => {
    const { form, update } = useForm({username: null, password: null});
    const submit = () => {
        if (!form.username || !form.password) return events.emit('toast_error', 'Please fill all fields');
        events.emit("loading_change", true);
        events.emit("login_form_submit", form);
    };

    useEffect(() => {
        events.on("login_form_update", update);
        return () => {
            events.off("login_form_update", update);
        }
    });

    return { ...form, submit };
}

export const useSignUp = () => {
    const { form, update } = useForm({username: null, password: null, password_confirm: null});
    const submit = () => {
        if (!form.username || !form.password || !form.password_confirm) return events.emit('toast_error', 'Please fill all fields');
        if (form.password !== form.password_confirm) return events.emit('toast_error', 'Passwords do not match');
        events.emit("loading_change", true);
        events.emit("signup_form_submit", form)
    };

    useEffect(() => {
        events.on("signup_form_update", update);
        return () => {
            events.off("signup_form_update", update);
        }
    });

    return { ...form, submit };
}