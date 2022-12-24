import React from "react";
import { View, Image, StyleSheet } from "react-native";

function CameraPreview({ photo }) {
    return (
        <View style={styles.imageContainer}>
            <Image style={styles.image} source={{ uri: photo }} resizeMode="cover" />
        </View>
    );
}

export default CameraPreview;

const styles = StyleSheet.create({
    imageContainer: {
        position: "absolute",
        top: 0,
        left: 0,
        flex: 1,
        width: "100%",
        height: "100%",
    },
    image: {
        width: "100%",
        height: "100%",
        alignItems: "center",
        justifyContent: "center",
    },
});
