import "react-native-gesture-handler";
import { StatusBar } from "expo-status-bar";
import { StyleSheet } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
//Screens
import DexScreen from "./screens/DexScreen";
import CollectionScreen from "./screens/CollectionScreen";
import AboutScreen from "./screens/AboutScreen";
//Components and Utils
import { Color } from "./constants/styles";

const Stack = createStackNavigator();

export default function App() {
    return (
        <>
            <StatusBar style="light" />
            <NavigationContainer>
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
                    <Stack.Screen
                        name="Collection"
                        component={CollectionScreen}
                    />
                    <Stack.Screen name="About" component={AboutScreen} />
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
