import { useRef } from "react";
import { Animated, Easing, Pressable } from "react-native";
import ArrowSvg from "./ArrowSvg";
function ArrowButton({ style, color, onPress }) {
    const arrowRef = useRef(new Animated.Value(0)).current;
    const AnimatedPressable = Animated.createAnimatedComponent(Pressable);
    const handleButtonPress = () => {
        Animated.sequence([
            Animated.timing(arrowRef, {
                useNativeDriver: true,
                duration: 150,
                toValue: -10,
                easing: Easing.back(),
            }),
            Animated.timing(arrowRef, {
                useNativeDriver: true,
                duration: 100,
                toValue: 0,
            }),
        ]).start(({ finished }) => {
            finished && onPress();
        });
    };
    return (
        <AnimatedPressable
            style={[
                style,
                {
                    transform: [
                        {
                            translateX: arrowRef,
                        },
                    ],
                },
            ]}
            onPress={handleButtonPress}
        >
            <ArrowSvg color={color} />
        </AnimatedPressable>
    );
}

export default ArrowButton;
