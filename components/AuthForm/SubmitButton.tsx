import Button from "../Button"
import tw from "twrnc"
import { useTheme } from "@/utils/theme"

export default ({ submit }) => {
    const { primary, primaryText } = useTheme();
    return <Button style={tw`bg-${primary} text-${primaryText}`} onPress={submit}>
        Connexion
    </Button>
}