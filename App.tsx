import { KeyboardAvoidingView, Platform, View } from 'react-native';
import tw from 'twrnc';
import useApiServices from './hooks/useApi';
import useCache from './hooks/useCache';
import LoadingOverlay from './components/LoadingOverlay';
import useLoading from './hooks/useLoading';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import { Toasts } from '@backpackapp-io/react-native-toast';
import useToast from './hooks/useToast';
import Navigation from './navigation';
import { ThemeProvider } from './utils/theme';

export default function App() {
    useApiServices();
    useCache();
    useToast();
    const loading = useLoading();

    return (
        <ThemeProvider>
            <SafeAreaProvider>
                <KeyboardAvoidingView behavior={Platform.OS === "ios" ? "padding" : "height"} style={tw`flex-1`}>
                    <GestureHandlerRootView style={tw`flex-1 bg-gray-200 relative`}>
                        {loading && <LoadingOverlay />}
                        <Navigation />
                        <Toasts />
                    </GestureHandlerRootView>
                </KeyboardAvoidingView>
            </SafeAreaProvider>
        </ThemeProvider>
    );
}