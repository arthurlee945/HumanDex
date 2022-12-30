import { useRef } from "react";
import { Pressable, View, Text, StyleSheet, useWindowDimensions, Animated } from "react-native";
import { Color, botShade } from "../../../constants/styles";

function DirectButton({ children, onPress, color }) {
    const buttonRef = useRef({ pos: new Animated.Value(0), shade: new Animated.Value(3) }).current;

    const { fontScale } = useWindowDimensions();

    const handleButtonClick = () => {
        const baseConfig = {
            duration: 50,
            useNativeDriver: true,
        };
        Animated.sequence([
            Animated.parallel([
                Animated.timing(buttonRef.shade, {
                    toValue: 0,
                    ...baseConfig,
                }),
                Animated.timing(buttonRef.pos, {
                    toValue: 3,
                    ...baseConfig,
                }),
            ]),
            Animated.parallel([
                Animated.timing(buttonRef.shade, {
                    toValue: 3,
                    ...baseConfig,
                }),
                Animated.timing(buttonRef.pos, {
                    toValue: 0,
                    ...baseConfig,
                }),
            ]),
        ]).start(({ finished }) => finished && onPress());
    };
    return (
        <Pressable onPress={handleButtonClick}>
            <Animated.View
                style={[
                    styles.button,
                    { backgroundColor: color },
                    botShade,
                    {
                        elevation: buttonRef.shade,
                        shadowOffset: {
                            width: 0,
                            height: buttonRef.shade,
                        },
                        transform: [
                            {
                                translateY: buttonRef.pos,
                            },
                        ],
                    },
                ]}
            >
                <Text style={[{ fontSize: fontScale * 18, color: Color.white, fontWeight: "bold" }]}>{children}</Text>
            </Animated.View>
        </Pressable>
    );
}

export default DirectButton;

const styles = StyleSheet.create({
    button: {
        paddingHorizontal: 15,
        paddingVertical: 5,
        borderRadius: 10,
        marginHorizontal: 20,
    },
});
