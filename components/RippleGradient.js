import { View, Animated, StyleSheet, Dimensions } from "react-native";
import { useEffect, useState, useRef } from "react";
function RippleGradient({ rippleCount, color, style, looped, duration }) {
    const rippleRef = useRef([]);
    const [ripples, setRipples] = useState([]);
    const [animation, setAnimation] = useState(null);
    const handleRippleAnimation = (looped) => {
        const staggerAni = Animated.stagger(
            duration * 0.75,
            rippleRef.current.map((rRef) => {
                return Animated.parallel([
                    Animated.timing(rRef.pos, {
                        toValue: 2.7,
                        duration: duration,
                        useNativeDriver: true,
                    }),
                    Animated.timing(rRef.opacity, {
                        toValue: 0,
                        duration: duration,
                        useNativeDriver: true,
                    }),
                ]);
            })
        );
        if (!looped) return staggerAni.start();
        const animationLoop = Animated.loop(staggerAni);
        setAnimation(animationLoop);
        animationLoop.start();
    };
    useEffect(() => {
        if (!!animation) {
            animation.stop();
        }
        setRipples(() =>
            new Array(rippleCount).fill(undefined).map((_, i) => {
                rippleRef.current[i] = { pos: new Animated.Value(1), opacity: new Animated.Value(1) };
                return (
                    <Animated.View
                        key={`ripple-${i}-${color}`}
                        style={[
                            styles.rippleDefault,
                            {
                                backgroundColor: color,
                                transform: [
                                    {
                                        scale: rippleRef.current[i].pos,
                                    },
                                ],
                                opacity: rippleRef.current[i].opacity,
                            },
                        ]}
                    />
                );
            })
        );
        handleRippleAnimation(looped);
    }, [rippleCount, color, looped]);

    return (
        <View style={[styles.rippleContainer, style, { backgroundColor: looped ? color : "transparent" }]}>
            {ripples}
        </View>
    );
}

export default RippleGradient;

const width = Dimensions.get("window").width;
const styles = StyleSheet.create({
    rippleContainer: {
        position: "absolute",
        top: 0,
        left: 0,
        flex: 1,
        width: "100%",
        height: "100%",
        alignItems: "center",
        justifyContent: "center",
        borderRadius: width / 2,
        opacity: 0.7,
    },
    rippleDefault: {
        position: "absolute",
        width: "100%",
        height: "100%",
        borderRadius: width / 2,
    },
});
