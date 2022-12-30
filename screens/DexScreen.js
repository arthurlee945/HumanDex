import { StyleSheet, View } from "react-native";
//Components and Utils
import ScreenContentView from "../components/ScreenContentView";
import Cover from "../components/introCover/Cover";
import Camera from "../components/Camera/Camera";
function DexScreen() {
    return (
        <View style={styles.screen}>
            <ScreenContentView style={styles.contentContainer}>
                <Camera />
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
        flex: 1,
    },
});
