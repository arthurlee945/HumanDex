import { Animated, View, Pressable, Dimensions, StyleSheet } from "react-native";
import { Color, outline } from "../../constants/styles";
import { useRef } from "react";
function CoverButton({ onPress, pos }) {
    const shaodowAnime = useRef(new Animated.Value(3)).current;
    const buttonAnime = useRef(new Animated.Value(0)).current;
    const handleButtonClick = () => {
        Animated.timing(buttonAnime, {
            toValue: 3,
            duration: 100,
            useNativeDriver: true,
        }).start(({ finished }) => {
            finished &&
                Animated.timing(buttonAnime, {
                    toValue: 0,
                    duration: 100,
                    useNativeDriver: true,
                }).start();
        });
        // onPress();
    };
    return (
        <View style={[styles.buttonTopContainer, outline]}>
            <Pressable onPress={handleButtonClick}>
                <Animated.View
                    style={[
                        styles.mainBtn,
                        outline,
                        {
                            elevation: shaodowAnime,
                            shadowOffset: {
                                width: 0,
                                height: shaodowAnime,
                            },
                            transform: [
                                {
                                    translateY: buttonAnime,
                                },
                            ],
                        },
                    ]}
                ></Animated.View>
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
