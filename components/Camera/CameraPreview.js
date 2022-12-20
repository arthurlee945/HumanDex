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
        flex: 1,
        width: "100%",
        height: "100%",
        borderWidth: 2,
        borderColor: "red",
    },
    image: {
        width: "100%",
        height: "100%",
    },
    text: {
        color: "white",
    },
});
