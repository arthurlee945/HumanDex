import { useRef } from "react";
import { Pressable, Animated } from "react-native";
import { Ionicons } from "@expo/vector-icons";
function TrashIconButton({ onPress, color, bgColor, size }) {
    const binRef = useRef(new Animated.Value(0)).current;
    const AnimatablePressable = Animated.createAnimatedComponent(Pressable);
    const handleTrashBinClick = () => {
        const defaultConfig = {
            useNativeDriver: true,
            duration: 50,
        };
        Animated.sequence([
            Animated.timing(binRef, { ...defaultConfig, toValue: 1 }),
            Animated.timing(binRef, { ...defaultConfig, toValue: 0 }),
        ]).start(({ finished }) => finished && onPress());
    };
    return (
        <AnimatablePressable
            style={{
                justifyContent: "center",
                alignItems: "center",
                transform: [
                    {
                        rotate: binRef.interpolate({
                            inputRange: [0, 1],
                            outputRange: ["0deg", "30deg"],
                        }),
                    },
                ],
            }}
            onPress={handleTrashBinClick}
        >
            <Ionicons name="trash-bin-sharp" size={size + 5} color={bgColor} style={{ position: "absolute" }} />
            <Ionicons name="trash-bin-outline" size={size} color={color} />
        </AnimatablePressable>
    );
}

export default TrashIconButton;
