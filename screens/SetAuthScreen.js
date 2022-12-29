import { StyleSheet, View } from "react-native";
//Components and Utils
import ScreenContentView from "../components/ScreenContentView";
import NavBar from "../components/Nav/NavBar";
import SetAuth from "../components/setAuth/SetAuth";
function DexScreen() {
    return (
        <View style={styles.screen}>
            <ScreenContentView style={styles.contentContainer}>
                <NavBar aboutButton={false} />
                <SetAuth />
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
