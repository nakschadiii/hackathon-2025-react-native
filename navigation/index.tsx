import useToken from '@/hooks/useToken';
import { NavigationContainer } from '@react-navigation/native';
import { Text } from 'react-native';
import tw from 'twrnc';
import Stack from './stack';
import { linking as loggedLinking, routes as LoggedRoutes } from './logged';
import { linking as loggedMobileLinking, routes as LoggedMobileRoutes } from './loggedMobile';
import { linking as unloggedLinking, routes as UnloggedRoutes } from './unlogged';
import usePlatform from '@/hooks/usePlatform';

export default () => {
    const { token, init } = useToken();
    const { isMobile } = usePlatform();
    const linking = token ?
        (isMobile ? loggedMobileLinking : loggedLinking) :
        unloggedLinking;

    return init && <NavigationContainer linking={linking} fallback={<Text>Loading...</Text>}>
        <Stack.Navigator screenOptions={{ cardStyle: tw`w-full h-full` }}>
            {token ?
            (isMobile ? LoggedMobileRoutes : LoggedRoutes) :
            UnloggedRoutes}
        </Stack.Navigator>
    </NavigationContainer>
}

