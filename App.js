import "react-native-gesture-handler";
import { useCallback, useEffect, useState } from "react";
import { StatusBar } from "expo-status-bar";
import { StyleSheet } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import * as SplashScreen from "expo-splash-screen";
import { initTables } from "./utils/database";
//Screens
import DexScreen from "./screens/DexScreen";
import CollectionScreen from "./screens/CollectionScreen";
import AboutScreen from "./screens/AboutScreen";
import HumanDetailScreen from "./screens/HumanDetailScreen";
import SetAuthScreen from "./screens/SetAuthScreen";
//Components and Utils
import { Color } from "./constants/styles";

SplashScreen.preventAutoHideAsync();
const Stack = createStackNavigator();

export default function App() {
    const [initLoading, setInitLoading] = useState(true);

    useEffect(() => {
        (async () => {
            try {
                await initTables();
                setInitLoading(false);
            } catch (err) {
                console.log(err);
            }
        })();
    }, []);
    const onLayoutRoot = useCallback(async () => {
        if (!initLoading) {
            await SplashScreen.hideAsync();
        }
    }, [initLoading]);

    if (initLoading) return null;
    return (
        <>
            <StatusBar style="light" />
            <NavigationContainer onReady={onLayoutRoot}>
                <Stack.Navigator
                    initialRouteName="Dex"
                    screenOptions={{
                        headerShown: false,
                        cardStyle: {
                            backgroundColor: Color.red100,
                        },
                    }}
                >
                    <Stack.Screen name="Dex" component={DexScreen} />
                    <Stack.Screen name="Collection" component={CollectionScreen} />
                    <Stack.Screen name="HumanDetail" component={HumanDetailScreen} />
                    <Stack.Screen name="About" component={AboutScreen} />
                    <Stack.Screen name="SetAuth" component={SetAuthScreen} />
                </Stack.Navigator>
            </NavigationContainer>
        </>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: "center",
        justifyContent: "center",
    },
});
