import { StyleSheet, View } from "react-native";
//Components and Utils
import ScreenContentView from "../components/ScreenContentView";
import NavBar from "../components/Nav/NavBar";
function DexScreen() {
    return (
        <View style={styles.screen}>
            <ScreenContentView style={styles.contentContainer}>
                <NavBar />
            </ScreenContentView>
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
