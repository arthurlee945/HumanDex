import { View, Text, StyleSheet, useWindowDimensions } from "react-native";
import { Camera, CameraType } from "expo-camera";
import { Color } from "../../constants/styles";
import CameraPreview from "./CameraPreview";
import Button from "../Button";
function CameraScreen({ camera, preview, loading }) {
    const { fontScale } = useWindowDimensions();
    const [permission, requestPermission] = Camera.useCameraPermissions();
    if (!permission) {
        return <View style={styles.csContainer} />;
    }
    if (!permission.granted) {
        return (
            <View style={styles.csContainer}>
                <Text style={[styles.permissionText, { fontSize: 16 * fontScale }]}>
                    We need permission for HumanDex
                </Text>
                <Button onPress={requestPermission}>Grant Permission</Button>
            </View>
        );
    }
    if (loading) {
        return (
            <View style={styles.csContainer}>
                <Text>Loading</Text>
            </View>
        );
    }
    return (
        <View style={styles.csContainer}>
            {preview ? (
                <CameraPreview photo={preview} />
            ) : (
                <Camera ref={camera} style={styles.camera} type={CameraType.back} ratio={"1:1"}></Camera>
            )}
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
        overflow: "hidden",
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