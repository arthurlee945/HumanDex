import { Animated, View, Pressable, Dimensions, StyleSheet } from "react-native";
import { Color, outline } from "../../constants/styles";
import { useRef } from "react";
//components
import RadialGradient from "../RadialGradient";
function CoverButton({ onPress, pos }) {
    const shadowAnime = useRef(new Animated.Value(3)).current;
    const buttonAnime = useRef(new Animated.Value(0)).current;
    const handleButtonClick = () => {
        const duration = 75;
        Animated.parallel([
            Animated.timing(buttonAnime, {
                toValue: 1.5,
                duration: duration,
                useNativeDriver: true,
            }).start(({ finished }) => {
                finished &&
                    Animated.timing(buttonAnime, {
                        toValue: 0,
                        duration: duration,
                        useNativeDriver: true,
                    }).start();
            }),
            Animated.timing(shadowAnime, {
                toValue: 0,
                duration: duration,
                useNativeDriver: true,
            }).start(
                ({ finished }) =>
                    finished &&
                    Animated.timing(shadowAnime, {
                        toValue: 3,
                        duration: duration,
                        useNativeDriver: true,
                    }).start()
            ),
        ]).start();
        onPress();
    };
    return (
        <View style={[styles.buttonTopContainer, outline]}>
            <Pressable onPress={handleButtonClick}>
                <Animated.View
                    style={[
                        styles.mainBtn,
                        outline,
                        {
                            elevation: shadowAnime,
                            shadowOffset: {
                                width: 0,
                                height: shadowAnime,
                            },
                            transform: [
                                {
                                    translateY: buttonAnime,
                                },
                            ],
                        },
                    ]}
                >
                    <RadialGradient rippleCount={5} color={"Yellow"} />
                </Animated.View>
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
    mainBtn: {
        width: buttonSize,
        height: buttonSize,
        borderRadius: buttonSize / 2,
        backgroundColor: Color.white,
        shadowColor: "#000",
        shadowOpacity: 0.5,
        shadowRadius: 1.5,
    },
});
