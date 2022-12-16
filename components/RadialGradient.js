import { View, Animated, StyleSheet } from "react-native";
import { useCallback, useState, useRef } from "react";
function RadialGradient({ rippleCount, color, style }) {
    const [ripples, setRipples] = useState([]);
    const rippleRef = useRef([]);
    const addRipples = useCallback(() => {
        console.log("heelo");
    }, [color]);
    useState(() => {
        setRipples(
            new Array(rippleCount).map((_, i) => {
                rippleRef.current[i] = new Animated.Value(1);
                return <Animated.View />;
            })
        );
        addRipples();
        console.log(ripples, rippleRef);
    }, [rippleCount, addRipples]);

    return <View style={[style]}>{ripples}</View>;
}

export default RadialGradient;
