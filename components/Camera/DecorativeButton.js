import { useRef, useState } from "react";
import { Animated, View, StyleSheet, Pressable } from "react-native";
import { Color } from "../../constants/styles";
function DecorativeButton() {
    const [stage, setStage] = useState(0);
    const AnimatablePressable = Animated.createAnimatedComponent(Pressable);
    const lines = useRef({ ang: new Animated.Value(0), pos: new Animated.Value(1) }).current;
    const handleDecoBtnClick = () => {
        console.log(0.25 * stage);
        const defaultConfig = {
            useNativeDriver: true,
            duration: 150,
        };
        Animated.sequence([
            Animated.timing(lines.ang, { ...defaultConfig, toValue: 0.25 * stage }),
            Animated.sequence([
                Animated.timing(lines.pos, { ...defaultConfig, duration: defaultConfig.duration / 6, toValue: 0.2 }),
                Animated.timing(lines.pos, { ...defaultConfig, duration: defaultConfig.duration / 6, toValue: 1.3 }),
                Animated.timing(lines.pos, { ...defaultConfig, duration: defaultConfig.duration / 6, toValue: 0.4 }),
                Animated.timing(lines.pos, { ...defaultConfig, duration: defaultConfig.duration / 6, toValue: 1.1 }),
                Animated.timing(lines.pos, { ...defaultConfig, duration: defaultConfig.duration / 6, toValue: 0.7 }),
                Animated.timing(lines.pos, { ...defaultConfig, duration: defaultConfig.duration / 6, toValue: 1 }),
            ]),
        ]).start(({ finished }) => finished && setStage((stage + 1) % 5));
    };
    return (
        <AnimatablePressable
            style={[
                styles.decoContainer,
                {
                    transform: [
                        {
                            rotate: lines.ang.interpolate({
                                inputRange: [0, 1],
                                outputRange: ["0deg", "360deg"],
                            }),
                        },
                        { scaleY: lines.pos },
                    ],
                },
            ]}
            onPress={handleDecoBtnClick}
        >
            <View style={styles.line}></View>
            <View style={styles.line}></View>
            <View style={styles.line}></View>
            <View style={styles.line}></View>
        </AnimatablePressable>
    );
}

export default DecorativeButton;

const styles = StyleSheet.create({
    decoContainer: {
        flex: 1,
        width: "100%",
        height: "100%",
        justifyContent: "space-between",
    },
    line: {
        width: "100%",
        height: 2,
        backgroundColor: Color.black,
    },
});
