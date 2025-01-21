import Settings from "@/screens/Settings"
import Stack from "./stack"
import Results from "@/screens/Results"
import Profile from "@/screens/Profile"
import HomeMobile from "@/screens/HomeMobile"

export const linking = {
    screens: {
        profile: '/profile',
        settings: '/settings',
        home: '/',
        results: '/results',
    },
    initialRouteName: '/',
}

export const routes = <>
    <Stack.Screen name="home" component={HomeMobile} />
    <Stack.Screen name="profile" component={Profile} />
    <Stack.Screen name="settings" component={Settings} />
    <Stack.Screen name="results" component={Results} />
</>