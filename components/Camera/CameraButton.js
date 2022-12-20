import { Animated, Pressable, View, Dimensions, StyleSheet } from "react-native";
import { useRef } from "react";
import { Color, outline } from "../../constants/styles";
function CameraButton({ onPress }) {
    const buttonRef = useRef([new Animated.Value(0)]);
    const handlebuttonPress = () => {
        onPress();
    };
    return (
        <View style={styles.buttonContainer}>
            <Pressable onPress={handlebuttonPress} style={styles.pressableArea}>
                <Animated.View style={[styles.button, outline]}></Animated.View>
            </Pressable>
        </View>
    );
}

export default CameraButton;
const { width } = Dimensions.get("window");
const styles = StyleSheet.create({
    buttonContainer: {
        width: "35%",
        justifyContent: "center",
        alignItems: "flex-end",
    },
    pressableArea: {
        width: "80%",
        aspectRatio: 1 / 1,
    },
    button: {
        width: "100%",
        height: "100%",
        borderRadius: width / 2,
        backgroundColor: Color.black,
    },
});
