import { Animated, View, Pressable, Dimensions, StyleSheet } from "react-native";
import { Color, outline } from "../../constants/styles";
import { useRef, useState } from "react";
//components
import RippleGradient from "../RippleGradient";
function CoverButton({ onPress, pos }) {
    const buttonAnime = useRef([new Animated.Value(0), new Animated.Value(3)]).current;
    const [rippleConfig, setRippleConfig] = useState({
        count: 5,
        color: Color.yellow100,
        looped: false,
        duration: 500,
    });
    const handleButtonClick = () => {
        const duration = 75,
            baseConfig = {
                duration: duration,
                useNativeDriver: true,
            };
        setRippleConfig((currConfig) => ({
            ...currConfig,
            count: 1,
            color: Color.green50,
            looped: true,
            duration: 400,
        }));
        Animated.parallel([
            Animated.timing(buttonAnime[0], {
                toValue: 3,
                ...baseConfig,
            }),
            Animated.timing(buttonAnime[1], {
                toValue: 0,
                ...baseConfig,
            }),
        ]).start(({ finished }) => {
            finished &&
                Animated.parallel([
                    Animated.timing(buttonAnime[0], {
                        toValue: 0,
                        ...baseConfig,
                    }),
                    Animated.timing(buttonAnime[1], {
                        toValue: 3,
                        ...baseConfig,
                    }),
                ]).start();
        });
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
                            elevation: buttonAnime[1],
                            shadowOffset: {
                                width: 0,
                                height: buttonAnime[1],
                            },
                            transform: [
                                {
                                    translateY: buttonAnime[0],
                                },
                            ],
                        },
                    ]}
                >
                    <RippleGradient
                        style={styles.rippleStyle}
                        rippleCount={rippleConfig.count}
                        color={rippleConfig.color}
                        looped={rippleConfig.looped}
                        duration={rippleConfig.duration}
                    />
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
        alignItems: "center",
        justifyContent: "center",
        width: buttonSize,
        height: buttonSize,
        borderRadius: buttonSize / 2,
        backgroundColor: Color.white,
        shadowColor: "#000",
        shadowOpacity: 0.5,
        shadowRadius: 1.5,
    },
    rippleStyle: {},
});
