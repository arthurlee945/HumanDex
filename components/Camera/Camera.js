import { View, Dimensions, Image, StyleSheet } from "react-native";
import CameraScreen from "./CameraScreen";
import { Color, outline, botShade } from "../../constants/styles";
import { useRef, useState } from "react";
//components
import InfoDisplayPanel from "./InfoDisplayPanel";
import CameraButton from "./CameraButton";
import DexIndicator from "../DexIndicator";
function Camera() {
    const camera = useRef();
    const [preview, setPreview] = useState();
    const handleTakePicture = async () => {
        if (!camera.current) return;
        if (!preview) {
            camera.current.pausePreview();
            const photo = await camera.current.takePictureAsync();
            setPreview(photo.uri);
            //need to convert to dataurl
        } else {
            camera.current.resumePreview();
            setPreview(undefined);
        }
    };
    return (
        <>
            <DexIndicator />
            <View style={styles.contentContainer}>
                <View style={styles.cameraContainer}>
                    <View style={[styles.cameraBox, outline]}>
                        <View style={styles.topIndicatorCont}>
                            <View style={styles.redTop}>
                                <Image
                                    blurRadius={15}
                                    style={styles.shadeImage}
                                    source={require("../../assets/shade.png")}
                                />
                            </View>
                            <View style={styles.redTop}>
                                <Image
                                    blurRadius={15}
                                    style={styles.shadeImage}
                                    source={require("../../assets/shade.png")}
                                />
                            </View>
                        </View>
                        <CameraScreen camera={camera} preview={preview} />
                        <View style={styles.botIndicatorCont}>
                            <View style={styles.redBot}>
                                <Image
                                    blurRadius={15}
                                    style={styles.shadeImage}
                                    source={require("../../assets/shade.png")}
                                />
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
                <View style={[styles.controlContainer, botShade]}>
                    <View style={styles.controlIndicator}>
                        <View style={[styles.CI, { backgroundColor: Color.red100 }]}></View>
                        <View style={[styles.CI, { backgroundColor: Color.blue100 }]}></View>
                    </View>
                    <View style={styles.mainControl}>
                        <InfoDisplayPanel>
                            Placeholder Placeholder Placeholder Placeholder Placeholder Placeholder Placeholder
                            Placeholder Placeholder Placeholder Placeholder Placeholder Placeholder Placeholder
                            Placeholder Placeholder Placeholder Placeholder Placeholder Placeholder Placeholder
                        </InfoDisplayPanel>
                        <CameraButton onPress={handleTakePicture} />
                    </View>
                </View>
            </View>
        </>
    );
}

export default Camera;
const { width } = Dimensions.get("window");
const styles = StyleSheet.create({
    contentContainer: {
        flex: 1,
        width: "100%",
        paddingHorizontal: 25,
        paddingVertical: 30,
    },
    //camera styles
    cameraContainer: {
        flex: 1,
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

    //control styles
    controlContainer: {
        flex: 0.6,
    },
    controlIndicator: {
        flexDirection: "row",
        justifyContent: "center",
        paddingTop: 20,
    },
    CI: {
        width: "14%",
        height: 5,
        borderRadius: 4,
        borderWidth: 1,
        marginHorizontal: 15,
    },
    mainControl: {
        flex: 1,
        paddingHorizontal: 10,
        paddingVertical: 20,
        flexDirection: "row",
        justifyContent: "space-between",
    },
});
