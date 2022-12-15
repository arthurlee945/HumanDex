import { LinearGradient } from "expo-linear-gradient";
import { Animated, View, Image, Pressable, Dimensions, StyleSheet } from "react-native";
import { Color, outline, botShade } from "../../constants/styles";
function CoverButton({ onPress, pos }) {
    return (
        <View style={[styles.buttonTopContainer, outline]}>
            <Pressable onPress={onPress}>
                <Animated.View style={[styles.mainBtn, outline]}></Animated.View>
            </Pressable>
        </View>
    );
}

export default CoverButton;

const width = Dimensions.get("window").width;
const containerSize = width * 0.35;
const buttonSize = width * 0.28;
const styles = StyleSheet.create({
    buttonTopContainer: {
        position: "absolute",
        alignItems: "center",
        justifyContent: "center",
        bottom: 0,
        backgroundColor: Color.white,
        width: containerSize,
        height: containerSize,
        aspectRatio: 1 / 1,
        transform: [{ translateY: containerSize / 2 }],
        borderRadius: containerSize / 2,
    },
    insetShadow: {
        backgroundColor: "#0000",
        width: buttonSize,
        height: buttonSize,
        borderRadius: buttonSize / 2,
    },
    mainBtn: {
        width: buttonSize,
        height: buttonSize,
        borderRadius: buttonSize / 2,
        backgroundColor: Color.white,
        elevation: 3,
        shadowColor: "#000",
        shadowOpacity: 0.2,
        shadowRadius: 1.5,
        shadowOffset: {
            width: 0,
            height: 3,
        },
    },
});
