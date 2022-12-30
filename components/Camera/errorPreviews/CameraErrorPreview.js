import { View, Text, useWindowDimensions, StyleSheet } from "react-native";
import { Color } from "../../../constants/styles";
import AuthError from "./AuthError";
import ServerError from "./ServerError";
function CameraErrorPreview({ serverError, setServerError }) {
    const { fontScale } = useWindowDimensions();
    const defaultFontSizing = { fontSize: fontScale * 18, color: Color.white };
    return (
        <View style={styles.container}>
            {serverError.server && <ServerError defaultFont={defaultFontSizing} />}
            {serverError.auth && <AuthError defaultFont={defaultFontSizing} />}
        </View>
    );
}

export default CameraErrorPreview;

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
