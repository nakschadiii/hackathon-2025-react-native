import Login from "@/screens/Login"
import Stack from "./stack"
import SignUp from "@/screens/SignUp"

export const linking = {
    screens: {
        Login: 'login',
        SignUp: 'signup',
    },
    initialRouteName: 'Login',
}

export const routes = <>
    <Stack.Screen name="login" component={Login} options={{ headerShown: false }} />
    <Stack.Screen name="signup" component={SignUp} options={{ headerShown: false }} />
</>