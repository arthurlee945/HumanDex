import { useRef } from "react";
import { Pressable, Animated, StyleSheet } from "react-native";
import { AntDesign } from "@expo/vector-icons";
function SocialLinkButton({ name, size, color, onPress }) {
    const iconRef = useRef(new Animated.Value(0)).current;
    const AnimatedPressable = Animated.createAnimatedComponent(Pressable);
    const handleIconClick = () => {
        const defaultConfig = {
            useNativeDriver: true,
            duration: 20,
        };
        Animated.loop(
            Animated.sequence([
                Animated.timing(iconRef, { ...defaultConfig, toValue: 1 }),
                Animated.timing(iconRef, { ...defaultConfig, toValue: -1, duration: defaultConfig.duration * 2 }),
                Animated.timing(iconRef, { ...defaultConfig, toValue: 0 }),
            ]),
            {
                iterations: 2,
            }
        ).start(({ finished }) => finished && onPress());
    };
    return (
        <AnimatedPressable
            onPress={handleIconClick}
            style={{
                transform: [
                    {
                        rotate: iconRef.interpolate({
                            inputRange: [-1, 1],
                            outputRange: ["35deg", "-35deg"],
                        }),
                    },
                ],
            }}
        >
            <AntDesign name={name} size={size} color={color} />
        </AnimatedPressable>
    );
}

export default SocialLinkButton;

const styles = StyleSheet.create({});
