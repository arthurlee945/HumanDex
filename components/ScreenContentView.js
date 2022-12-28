import { SafeAreaView, StatusBar, StyleSheet, Platform, ImageBackground } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import { Color } from "../constants/styles";

function ScreenContentView({ children, style, onLayout }) {
    return (
        <LinearGradient
            colors={[Color.red150, Color.red100, Color.red150]}
            onLayout={onLayout}
            style={styles.gradientView}
        >
            <ImageBackground style={styles.bgContainer} source={require("../assets/lines.png")} resizeMode="repeat">
                <SafeAreaView style={[styles.AndroidSafeArea, style]}>{children}</SafeAreaView>
            </ImageBackground>
        </LinearGradient>
    );
}

export default ScreenContentView;

const styles = StyleSheet.create({
    gradientView: {
        flex: 1,
    },
    bgContainer: {
        flex: 1,
        resizeMode: "repeat",
    },
    AndroidSafeArea: {
        flex: 1,
        paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0,
    },
});
