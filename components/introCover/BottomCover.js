import { Animated, Dimensions, StyleSheet } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import { Color, outline, topShade } from "../../constants/styles";
function BottomCover({ pos }) {
    return (
        <Animated.View
            style={[
                styles.bottomCover,
                topShade,
                {
                    transform: [
                        {
                            translateY: pos,
                        },
                    ],
                },
            ]}
        >
            <LinearGradient colors={[Color.red100, Color.red150]} style={[styles.gradientBg, outline]}></LinearGradient>
        </Animated.View>
    );
}

export default BottomCover;
const height = Dimensions.get("window").height;
const styles = StyleSheet.create({
    bottomCover: {
        zIndex: 1,
        flex: 1,
        position: "absolute",
        bottom: 0,
        left: 0,
        height: height * 0.65 + 50,
        width: "100%",
        borderTopLeftRadius: 10,
        borderTopRightRadius: 10,
        paddingTop: 3,
        backgroundColor: "#0000",
    },
    gradientBg: {
        flex: 1,
        borderTopLeftRadius: 10,
        borderTopRightRadius: 10,
    },
});
