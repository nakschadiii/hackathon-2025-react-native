import { Iden, Pswd, Submit } from "@/components/AuthForm";
import { useSignUp } from "@/hooks/useLogin";
import Card from "@/components/Card";
import ScreenView from "@/components/CenterScreenView";
import tw from "twrnc";
import InputGroup from "@/components/InputGroup";
import Title from "@/components/Title";
import { Text, View } from "react-native";
import { useNavigation } from "@react-navigation/native";
import BackgroudHome from "@/components/BackgroudHome";
import { useTheme } from "@/utils/theme";

export default function() {
    const { username, password, password_confirm, submit } = useSignUp();
    const navigation = useNavigation();
    const { primary, primaryText } = useTheme();

    return <ScreenView>
        <BackgroudHome />
        <View style={tw`flex-1 items-start justify-center w-3/4 gap-2`}>
            <Title level={4} style={tw`text-${primaryText}`}>Inscription</Title>
            <Card style={tw`w-full gap-2`}>
                <InputGroup>
                    <Iden name="username" formEvent="signup_form_update" value={username} submit={submit} />
                    <Pswd name="password" formEvent="signup_form_update" value={password} submit={submit} />
                    <Pswd name="password_confirm" formEvent="signup_form_update" value={password_confirm} submit={submit} />
                </InputGroup>
                <Submit submit={submit} />
            </Card>
            <View style={tw`flex-row items-center justify-center w-full mt-1`}>
                <Text style={tw`text-gray-500`}>Vous avez déja un compte ? <Text style={tw`text-${primary}`} onPress={() => navigation.navigate("login")}>Connectez-vous</Text></Text>
            </View>
        </View>
    </ScreenView>
}