import { View, Text, StyleSheet } from "react-native";
import { Camera, CameraType } from "expo-camera";
import { useState } from "react";
import { Color } from "../constants/styles";
import Button from "./Button";
function CameraScreen({}) {
    const [type, setType] = useState(CameraType.back);
    const [permission, requestPermission] = Camera.useCameraPermissions();
    if (!permission) {
        return <View style={styles.csContainer}></View>;
    }
    if (!permission.granted) {
        return (
            <View style={styles.csContainer}>
                <Text style={styles.permissionText}>We need permission for HumanDex</Text>
                <Button onPress={requestPermission}>Grant Permission</Button>
            </View>
        );
    }

    return (
        <View style={styles.csContainer}>
            <Camera style={styles.camera} type={type}></Camera>
        </View>
    );
}

export default CameraScreen;

const styles = StyleSheet.create({
    csContainer: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: Color.black,
        borderRadius: 5,
    },
    permissionText: {
        textAlign: "center",
        color: Color.white,
        marginBottom: 15,
    },
    camera: {
        width: "100%",
        height: "100%",
    },
});