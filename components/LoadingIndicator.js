import { View, ActivityIndicator, StyleSheet } from "react-native";
import { Color } from "../constants/styles";
function LoadingIndicator({ color = Color.red100 }) {
    return (
        <View style={styles.loadingContainer}>
            <ActivityIndicator size="large" color={color} />
        </View>
    );
}

export default LoadingIndicator;
const styles = StyleSheet.create({
    loadingContainer: {
        position: "absolute",
        flex: 1,
        width: "100%",
        height: "100%",
        justifyContent: "center",
        alignItems: "center",
    },
});
