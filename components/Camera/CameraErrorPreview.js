import { View, Text, useWindowDimensions, StyleSheet } from "react-native";
import { Color } from "../../constants/styles";
function CameraErrorPreview({ serverError }) {
    const { fontScale } = useWindowDimensions();
    const defaultFontSizing = { fontSize: fontScale * 16, color: Color.white };
    return (
        <View style={styles.container}>
            <Text style={defaultFontSizing}>Placeholder</Text>
        </View>
    );
}

export default CameraErrorPreview;

const styles = StyleSheet.create({
    container: {
        zIndex: 1,
        position: "absolute",

        flex: 1,
        width: "100%",
        height: "100%",
        backgroundColor: "#00000099",
        alignItems: "center",
        justifyContent: "center",
    },
});
