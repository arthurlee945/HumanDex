import { useRef } from "react";
import { Animated, Pressable, StlyeSheet } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { Color } from "../../constants/styles";
function HomeButton({ onPress }) {
    const homeRef = useRef(new Animated.Value(1)).current;
    const AnimatedPressable = Animated.createAnimatedComponent(Pressable);
    const handleHomePress = () => {
        const defaultSet = {
            useNativeDriver: true,
            duration: 30,
        };
        Animated.sequence([
            Animated.timing(homeRef, { ...defaultSet, toValue: 0 }),
            Animated.timing(homeRef, { ...defaultSet, toValue: 1.3 }),
            Animated.timing(homeRef, { ...defaultSet, toValue: 0.4 }),
            Animated.timing(homeRef, { ...defaultSet, toValue: 1.1 }),
            Animated.timing(homeRef, { ...defaultSet, toValue: 0.7 }),
            Animated.timing(homeRef, { ...defaultSet, toValue: 1 }),
        ]).start(({ finished }) => finished && onPress());
    };
    return (
        <AnimatedPressable onPress={handleHomePress} style={{ transform: [{ scaleY: homeRef }] }}>
            <Ionicons name="md-home" size={28} color={Color.white} />
        </AnimatedPressable>
    );
}

export default HomeButton;
