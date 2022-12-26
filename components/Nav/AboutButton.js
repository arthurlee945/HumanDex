import { useRef } from "react";
import { Pressable, Animated, Easing } from "react-native";
//component
import AboutSvg from "./AboutSvg";
function AboutButton({ style, onPress }) {
    const aboutRef = useRef(new Animated.Value(0)).current;
    const AnimatedPressable = Animated.createAnimatedComponent(Pressable);
    const handleAboutPress = () => {
        Animated.timing(aboutRef, {
            toValue: 1,
            useNativeDriver: true,
            duration: 250,
            easing: Easing.elastic(4),
        }).start(({ finished }) => {
            finished && aboutRef.setValue(0);
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
                            rotate: aboutRef.interpolate({
                                inputRange: [0, 1],
                                outputRange: ["0deg", "360deg"],
                            }),
                        },
                    ],
                },
            ]}
            onPress={handleAboutPress}
        >
            <AboutSvg />
        </AnimatedPressable>
    );
}

export default AboutButton;
