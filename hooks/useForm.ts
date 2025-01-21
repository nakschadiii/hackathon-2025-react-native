import { useState } from "react";

export default function(value) {
    const [form, setForm] = useState<Record<string, any | null>>(value);
    const update = (key: string, text: string) => setForm({...form, [key]: text.length > 0 ? text : null});

    return { form, update };
}