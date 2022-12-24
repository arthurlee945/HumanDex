import { View, ActivityIndicator, StyleSheet } from "react-native";
import { Color } from "../constants/styles";
function LoadingIndicator() {
    return (
        <View style={styles.loadingContainer}>
            <ActivityIndicator size="large" color={Color.red100} />
        </View>
    );
}

export default LoadingIndicator;
const styles = StyleSheet.create({
    loadingContainer: {
        position: "absolute",
        top: 0,
        left: 0,
        flex: 1,
        width: "100%",
        height: "100%",
        justifyContent: "center",
        alignItems: "center",
    },
});
