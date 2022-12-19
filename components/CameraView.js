import { View, Dimensions, Image, StyleSheet } from "react-native";
import CameraScreen from "./CameraScreen";
import { Color, outline } from "../constants/styles";
function CameraView() {
    return (
        <View style={styles.cameraContainer}>
            <View style={[styles.cameraBox, outline]}>
                <View style={styles.topIndicatorCont}>
                    <View style={styles.redTop}>
                        <Image blurRadius={15} style={styles.shadeImage} source={require("../assets/shade.png")} />
                    </View>
                    <View style={styles.redTop}>
                        <Image blurRadius={15} style={styles.shadeImage} source={require("../assets/shade.png")} />
                    </View>
                </View>
                <CameraScreen />
                <View style={styles.botIndicatorCont}>
                    <View style={styles.redBot}>
                        <Image blurRadius={15} style={styles.shadeImage} source={require("../assets/shade.png")} />
                    </View>
                    <View style={styles.lines}>
                        <View style={styles.line}></View>
                        <View style={styles.line}></View>
                        <View style={styles.line}></View>
                        <View style={styles.line}></View>
                    </View>
                </View>
            </View>
        </View>
    );
}

export default CameraView;
const { width } = Dimensions.get("window");
const styles = StyleSheet.create({
    cameraContainer: {
        width: "100%",
        height: "55%",
        minHeight: 250,
        paddingHorizontal: 25,
        paddingVertical: 30,
        alignItems: "center",
        justifyContent: "center",
    },
    cameraBox: {
        height: "100%",
        width: "100%",
        paddingHorizontal: 25,
        paddingVertical: 15,
        backgroundColor: Color.white100,
        borderRadius: 10,
        borderBottomLeftRadius: 40,
    },
    topIndicatorCont: {
        justifyContent: "center",
        flexDirection: "row",
        paddingBottom: 15,
    },
    redTop: {
        width: 10,
        height: 10,
        borderRadius: 5,
        backgroundColor: Color.red100,
        marginHorizontal: 10,
        opacity: 0.8,
    },
    shadeImage: {
        width: "100%",
        height: "100%",
    },
    redBot: {
        width: 15,
        height: 15,
        borderRadius: 8,
        backgroundColor: Color.red100,
        opacity: 0.8,
    },
    botIndicatorCont: {
        flexDirection: "row",
        justifyContent: "space-between",
        paddingTop: 15,
    },
    lines: {
        width: "10%",
    },
    line: {
        width: "100%",
        height: 2,
        backgroundColor: Color.black,
        margin: 2,
    },
});
