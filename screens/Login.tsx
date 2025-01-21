import { Iden, Pswd, Submit } from "@/components/AuthForm";
import BackgroudHome from "@/components/BackgroudHome";
import Card from "@/components/Card";
import InputGroup from "@/components/InputGroup";
import ScreenView from "@/components/CenterScreenView";
import Title from "@/components/Title";
import { useLogin } from "@/hooks/useLogin";
import { useTheme } from "@/utils/theme";
import { useNavigation } from "@react-navigation/native";
import React from "react";
import { Text, View } from "react-native";
import tw from "twrnc";

export default function() {
    const { username, password, submit } = useLogin();
    const navigation = useNavigation();
    const { primary, primaryText } = useTheme();

    return <ScreenView>
        <BackgroudHome />
        <View style={tw`flex-1 items-start justify-center w-3/4 gap-2`}>
            <Title level={4} style={tw`text-${primaryText}`}>Connexion</Title>
            <Card style={tw`w-full gap-2`}>
                <InputGroup>
                    <Iden value={username} submit={submit} name="username" formEvent="login_form_update" />
                    <Pswd value={password} submit={submit} name="password" formEvent="login_form_update" />
                </InputGroup>
                <Submit submit={submit} />
            </Card>
            <View style={tw`flex-row items-center justify-center w-full mt-1`}>
                <Text style={tw`text-gray-500`}>Pas de compte ? <Text style={tw`text-${primary}`} onPress={() => navigation.navigate("signup")}>Inscrivez-vous</Text></Text>
            </View>
        </View>
    </ScreenView>
}