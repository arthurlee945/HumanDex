import { SafeAreaView, StatusBar, StyleSheet, Platform } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import { Color } from "../constants/styles";

function ScreenContentView({ children, style, onLayout }) {
    return (
        <LinearGradient
            colors={[Color.red150, Color.red100, Color.red150]}
            onLayout={onLayout}
            style={[styles.gradientView, style]}
        >
            <SafeAreaView style={styles.AndroidSafeArea}>
                {children}
            </SafeAreaView>
        </LinearGradient>
    );
}

export default ScreenContentView;

const styles = StyleSheet.create({
    gradientView: {
        flex: 1,
    },
    AndroidSafeArea: {
        flex: 1,
        paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0,
    },
});
