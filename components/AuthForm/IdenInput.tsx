import { events } from "@/utils/events"
import Input from "../Input"

export default ({ value, submit, name, formEvent }) => {
    return <Input
        value={value ?? ""}
        onChangeText={text => events.emit(formEvent, name, text)}
        placeholder="Username"
        onSubmitEditing={submit} />
}