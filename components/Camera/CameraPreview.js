import React from "react";
import { View, Text, ImageBackground, StyleSheet } from "react-native";

function CameraPreview({ photo }) {
    return (
        <View style={styles.imageContainer}>
            <ImageBackground style={styles.image} source={{ uri: photo }} resizeMode="cover">
                <Text style={styles.text}>This is preview screen</Text>
            </ImageBackground>
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
        borderWidth: 2,
    },
    image: {
        width: "100%",
        height: "100%",
    },
    text: {
        color: "white",
    },
});
