import { View, ActivityIndicator, StyleSheet } from "react-native";
import { Color } from "../constants/styles";
function LoadingIndicator() {
    return (
        <View stlye={styles.loadingContainer}>
            <ActivityIndicator size="large" color={Color.red100} />
        </View>
    );
}

export default LoadingIndicator;
const styles = StyleSheet.create({
    loadingContainer: {
        flex: 1,
        width: "100%",
        height: "100%",
        justifyContent: "center",
        alignItems: "center",
    },
});
