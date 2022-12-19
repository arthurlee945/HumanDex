import { View, Dimensions, StyleSheet } from "react-native";
import CameraScreen from "./CameraScreen";
import { Color, outline } from "../constants/styles";
function CameraView() {
    return (
        <View style={styles.cameraContainer}>
            <View style={[styles.cameraBox, outline]}>
                <View style={styles.topIndicatorCont}></View>
                <CameraScreen />
                <View style={styles.botIndicatorCont}></View>
            </View>
        </View>
    );
}

export default CameraView;
const { width } = Dimensions.get("window");
const styles = StyleSheet.create({
    cameraContainer: {
        width: "100%",
        height: "50%",
        minHeight: 250,
        paddingHorizontal: 25,
        paddingVertical: 30,
        alignItems: "center",
        justifyContent: "center",
    },
    cameraBox: {
        width: "100%",
        height: "100%",
        padding: 25,
        backgroundColor: Color.white100,
        borderRadius: 10,
        borderBottomLeftRadius: 40,
    },
    topIndicatorCont: {},
    botIndicatorCont: {},
});
