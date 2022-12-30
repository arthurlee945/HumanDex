import { useRef, useEffect } from "react";
import { Animated, StyleSheet, Text, useWindowDimensions } from "react-native";
import { Color } from "../../../constants/styles";
function WarningScreen({ warning, setWarning }) {
    const warningRef = useRef(new Animated.Value(0)).current;
    const { fontScale } = useWindowDimensions();
    const defaultFontSizing = {
        fontSize: fontScale * 18,
        color: Color.white,
        fontWeight: "bold",
        textAlign: "center",
        lineHeight: 25,
    };
    useEffect(() => {
        Animated.sequence([
            Animated.timing(warningRef, {
                useNativeDriver: true,
                duration: 75,
                toValue: 1,
            }),
            Animated.timing(warningRef, {
                toValue: 0,
                duration: 500,
                delay: 500,
                useNativeDriver: true,
            }),
        ]).start(({ finished }) => finished && setWarning(undefined));
    }, []);
    return (
        <Animated.View style={[styles.container, { opacity: warningRef }]}>
            <Text style={defaultFontSizing}>{warning}</Text>
        </Animated.View>
    );
}

export default WarningScreen;

const styles = StyleSheet.create({
    container: {
        zIndex: 1,
        position: "absolute",
        padding: 20,
        flex: 1,
        width: "100%",
        height: "100%",
        backgroundColor: "#00000099",
        alignItems: "center",
        justifyContent: "center",
    },
});
