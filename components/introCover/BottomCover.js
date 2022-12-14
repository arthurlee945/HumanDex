import { useState } from "react";
import { Animated, Dimensions, StyleSheet } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import { Color, topShade } from "../../constants/styles";
function BottomCover({ visible }) {
    const [visibility, setVisibility] = useState(visible);

    return (
        <Animated.View style={[styles.bottomCover, topShade]}>
            <LinearGradient
                colors={[Color.red100, Color.red150]}
                style={styles.gradientBg}
            ></LinearGradient>
        </Animated.View>
    );
}

export default BottomCover;
const height = Dimensions.get("window").height;
const styles = StyleSheet.create({
    bottomCover: {
        zIndex: 2,
        flex: 1,
        position: "absolute",
        bottom: 0,
        left: 0,
        height: height * 0.65,
        width: "100%",
        transform: [{ translateY: 0 }],
        borderTopLeftRadius: 10,
        borderTopRightRadius: 10,
        paddingTop: 3,
        backgroundColor: "#0000",
        overflow: "hidden",
    },
    gradientBg: {
        flex: 1,
        borderWidth: 2,
        borderColor: Color.black,
        borderTopLeftRadius: 10,
        borderTopRightRadius: 10,
    },
});
