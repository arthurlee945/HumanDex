import React from "react";
import { View, Animated, Pressable, Dimensions, useWindowDimensions, Easing, Image, StyleSheet } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { Color } from "../../constants/styles";
import { useRef } from "react";
function LibraryButton() {
    const { width } = useWindowDimensions();
    const navigation = useNavigation();
    const buttonAniRef = useRef([new Animated.Value(0), new Animated.Value(1)]).current;
    const AnimatedPressable = Animated.createAnimatedComponent(Pressable);
    const handleLibraryPress = () => {
        const baseConfig = {
            duration: 500,
            useNativeDriver: true,
            easing: Easing.back(),
        };
        Animated.parallel([
            Animated.timing(buttonAniRef[0], { toValue: width * 1.5, ...baseConfig }),
            Animated.timing(buttonAniRef[1], { toValue: 0, ...baseConfig }),
        ]).start(({ finished }) => {
            finished && navigation.navigate("Collection");
        });
    };
    return (
        <View style={styles.container}>
            <AnimatedPressable
                style={[
                    styles.pressable,
                    {
                        opacity: buttonAniRef[1],
                        transform: [
                            {
                                translateX: buttonAniRef[0],
                            },
                        ],
                    },
                ]}
                onPress={handleLibraryPress}
            >
                <Image style={styles.icon} source={require("../../assets/pokedexlibrary.png")} resizeMode="contain" />
            </AnimatedPressable>
        </View>
    );
}

export default LibraryButton;
const { width } = Dimensions.get("window");
const styles = StyleSheet.create({
    container: {
        width: width * 0.1,
    },
    pressable: {
        flex: 1,
        width: "100%",
        justifyContent: "center",
        alignItems: "center",
    },
    icon: {
        width: "100%",
        tintColor: Color.white,
    },
});
