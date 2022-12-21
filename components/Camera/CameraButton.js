import { Animated, Pressable, View, Image, Dimensions, StyleSheet } from "react-native";
import { useRef } from "react";
import { Color } from "../../constants/styles";
function CameraButton({ onPress }) {
    const buttonRef = useRef([new Animated.Value(3), new Animated.Value(0)]).current;
    const handlebuttonPress = () => {
        const baseConfig = {
            duration: 75,
            useNativeDriver: true,
        };
        Animated.parallel([
            Animated.timing(buttonRef[0], {
                toValue: 0,
                ...baseConfig,
            }),
            Animated.timing(buttonRef[1], {
                toValue: 3,
                ...baseConfig,
            }),
        ]).start(({ finished }) => {
            onPress();
            finished &&
                Animated.parallel([
                    Animated.timing(buttonRef[0], {
                        toValue: 3,
                        ...baseConfig,
                    }),
                    Animated.timing(buttonRef[1], {
                        toValue: 0,
                        ...baseConfig,
                    }),
                ]).start();
        });
    };
    return (
        <View style={styles.buttonContainer}>
            <Pressable onPress={handlebuttonPress} style={styles.pressableArea}>
                <Animated.View
                    style={[
                        styles.button,
                        {
                            elevation: buttonRef[0],
                            shadowOffset: {
                                width: 0,
                                height: buttonRef[0],
                            },
                            transform: [
                                {
                                    translateY: buttonRef[1],
                                },
                            ],
                        },
                    ]}
                >
                    <Image style={styles.buttonImage} blurRadius={4} source={require("../../assets/dexControl.png")} />
                </Animated.View>
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
        shadowColor: "#000",
        shadowOpacity: 0.2,
        shadowRadius: 2.75,
        borderWidth: 2,
    },
    buttonImage: {
        width: "100%",
        height: "100%",
        opacity: 0.5,
    },
});
