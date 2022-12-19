import { View, Text, Pressable, StyleSheet } from "react-native";
import { Color, botShade } from "../constants/styles";

function Button({ children, onPress }) {
    return (
        <Pressable onPress={onPress} style={({ pressed }) => pressed && styles.pressed}>
            <View style={styles.buttonContainer}>
                <Text style={styles.text}>{children}</Text>
            </View>
        </Pressable>
    );
}

export default Button;

const styles = StyleSheet.create({
    buttonContainer: {
        backgroundColor: Color.red100,
        paddingHorizontal: 20,
        paddingVertical: 10,
        borderRadius: 25,
    },
    text: {
        color: Color.white100,
    },
    pressed: {
        opacity: 0.7,
    },
});
