import { events } from "@/utils/events"
import Input from "../Input"

export default ({ name, formEvent, value, submit }) => {
    return <Input
        value={value ?? ""}
        onChangeText={text => events.emit(formEvent, name, text)}
        placeholder="Mot de passe"
        onSubmitEditing={submit}
        secureTextEntry />
}