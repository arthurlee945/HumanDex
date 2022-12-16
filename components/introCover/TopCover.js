import { useState } from "react";
import { Animated, View, Dimensions, StyleSheet } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import { Color, outline, botShade } from "../../constants/styles";
//Components
import CoverButton from "./CoverButton";
function TopCover({ visible }) {
    const [visibility, setVisibility] = useState(visible);

    return (
        <Animated.View style={[styles.topCover]}>
            <LinearGradient colors={[Color.red150, Color.red100]} style={styles.gradientBg}>
                <View style={[styles.buttonContainer, outline, botShade]}>
                    <CoverButton />
                </View>
            </LinearGradient>
        </Animated.View>
    );
}

export default TopCover;

const height = Dimensions.get("window").height;

const styles = StyleSheet.create({
    topCover: {
        zIndex: 2,
        flex: 1,
        position: "absolute",
        top: 0,
        left: 0,
        height: height * 0.5,
        width: "100%",
        transform: [{ translateY: 0 }],
        borderBottomLeftRadius: 10,
        borderBottomRightRadius: 10,
        backgroundColor: "#0000",
    },
    gradientBg: {
        flex: 1,
        borderBottomLeftRadius: 10,
        borderBottomRightRadius: 10,
        backgroundColor: "#0000",
        overflow: "visible",
    },
    buttonContainer: {
        flex: 1,
        alignItems: "center",
        borderBottomLeftRadius: 10,
        borderBottomRightRadius: 10,
    },
});
