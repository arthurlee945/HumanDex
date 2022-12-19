import { View, StyleSheet } from "react-native";
import { Camera, CameraType } from "expo-camera";
import { useState } from "react";
import { Color } from "../constants/styles";
function CameraScreen() {
    const [type, setType] = useState(CameraType.back);
    const [permission, requestPermission] = Camera.useCameraPermissions();

    return <View style={styles.csContainer}></View>;
}

export default CameraScreen;

const styles = StyleSheet.create({
    csContainer: {
        width: "100%",
        height: "100%",
        backgroundColor: Color.black,
    },
});
