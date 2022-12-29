import { Pressable, Text, StyleSheet, useWindowDimensions, Animated } from "react-native";
import { Color } from "../../../constants/styles";

function DirectButton({ children, onPress, color }) {
    const AnimatablePressable = Animated.createAnimatedComponent(Pressable);
    const { fontScale } = useWindowDimensions();

    const handleButtonClick = () => {
        onPress();
    };
    return (
        <AnimatablePressable style={[styles.button, { backgroundColor: color }]} onPress={onPress}>
            <Text style={[{ fontSize: fontScale * 16, color: Color.white, fontWeight: "bold" }]}>{children}</Text>
        </AnimatablePressable>
    );
}

export default DirectButton;

const styles = StyleSheet.create({
    button: {
        paddingHorizontal: 15,
        paddingVertical: 5,
        borderRadius: 10,
        marginHorizontal: 15,
    },
});
