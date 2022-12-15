import { View, Animated, StyleSheet } from "react-native";
import { useCallback, useState } from "react";
function RadialGradient({ rippleCount, color, repeat, style }) {
    cosnt[(ripples, setRipples)] = useState([]);
    const addRipples = useCallback(() => {
        setRipples(new Array(rippleCount).map((_) => <Animated.View />));
    }, [rippleCount]);
    return <View style={[style]}></View>;
}

export default RadialGradient;
