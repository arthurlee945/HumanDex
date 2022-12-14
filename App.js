import "react-native-gesture-handler";
import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
//Screens
import IntroScreen from "./screens/IntroScreen";
import DexScreen from "./screens/DexScreen";
import AboutScreen from "./screens/AboutScreen";

const Stack = createStackNavigator();

export default function App() {
    return (
        <>
            <StatusBar style="light" />
            <NavigationContainer>
                <Stack.Navigator>
                    <Stack.Screen name="DexCover" component={IntroScreen} />
                    <Stack.Screen name="DexMain" component={DexScreen} />
                    <Stack.Screen name="About" component={AboutScreen} />
                </Stack.Navigator>
            </NavigationContainer>
        </>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#fff",
        alignItems: "center",
        justifyContent: "center",
    },
});
