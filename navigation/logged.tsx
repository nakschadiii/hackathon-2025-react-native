import Settings from "@/screens/Settings"
import Stack from "./stack"
import Home from "@/screens/Home"

export const linking = {
    screens: {
        settings: '/settings',
        home: '/',
        results: '/results',
    },
    initialRouteName: '/',
}

export const routes = <>
    <Stack.Screen name="home" component={Home} />
    <Stack.Screen name="settings" component={Settings} />
</>