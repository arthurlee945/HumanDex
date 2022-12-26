import { View, Animated, Pressable, Dimensions, useWindowDimensions, Easing, Image, StyleSheet } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { Color } from "../../constants/styles";
import { useRef } from "react";
function LibraryButton({ speechStarted }) {
    const { width } = useWindowDimensions();
    const navigation = useNavigation();
    const buttonAniRef = useRef(new Animated.Value(0)).current;
    const handleLibraryPress = () => {
        const baseConfig = {
            duration: 100,
            useNativeDriver: true,
        };
        Animated.timing(buttonAniRef, { toValue: -width * 0.075, ...baseConfig }).start(({ finished }) => {
            finished &&
                Animated.timing(buttonAniRef, { toValue: 0, ...baseConfig }).start(({ finished }) => {
                    finished && navigation.navigate("Collection");
                });
        });
    };

    return (
        <View style={styles.container}>
            <Pressable style={styles.pressable} onPress={!speechStarted && handleLibraryPress}>
                <Image style={styles.icon} source={require("../../assets/pokedexlibrary.png")} resizeMode="contain" />
                <Animated.Image
                    style={[
                        styles.coverIcon,
                        {
                            transform: [
                                {
                                    translateX: buttonAniRef,
                                },
                            ],
                        },
                    ]}
                    source={require("../../assets/pokedexlibrarycover.png")}
                    resizeMode="contain"
                />
            </Pressable>
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
    coverIcon: {
        position: "absolute",
        width: "100%",
        tintColor: Color.white,
    },
});
