import { useState } from "react";
import { Animated, Dimensions, StyleSheet } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import { Color, botShade } from "../../constants/styles";
function TopCover({ visible }) {
    const [visibility, setVisibility] = useState(visible);

    return (
        <Animated.View style={[styles.topCover, botShade]}>
            <LinearGradient
                colors={[Color.red150, Color.red100]}
                style={styles.gradientBg}
            ></LinearGradient>
        </Animated.View>
    );
}

export default TopCover;

const height = Dimensions.get("window").height;

const styles = StyleSheet.create({
    topCover: {
        zIndex: 3,
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
        overflow: "hidden",
        paddingBottom: 3,
    },
    gradientBg: {
        flex: 1,
        borderWidth: 2,
        borderColor: Color.black,
        borderBottomLeftRadius: 10,
        borderBottomRightRadius: 10,
    },
});
