import { StyleSheet, View, Button } from "react-native";
import { Camera } from "expo-camera";
//Components and Utils
import ScreenContentView from "../components/ScreenContentView";
import Cover from "../components/introCover/Cover";
import DexIndicator from "../components/DexIndicator";
import CameraView from "../components/CameraView";
function DexScreen() {
    return (
        <View style={styles.screen}>
            <ScreenContentView style={styles.contentContainer}>
                <DexIndicator />
                <CameraView />
            </ScreenContentView>
            <Cover />
        </View>
    );
}

export default DexScreen;

const styles = StyleSheet.create({
    screen: {
        flex: 1,
        overflow: "hidden",
    },
    contentContainer: {
        alignItems: "center",
    },
});
