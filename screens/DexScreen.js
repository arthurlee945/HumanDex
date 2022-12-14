import { StyleSheet, View, Text } from "react-native";
//Components and Utils
import ScreenContentView from "../components/ScreenContentView";
import TopCover from "../components/introCover/TopCover";
import BottomCover from "../components/introCover/BottomCover";

function DexScreen() {
    return (
        <View style={styles.screen}>
            <TopCover visible={true} />
            <BottomCover visible={true} />
            <ScreenContentView style={styles.contentContainer}>
                <Text>DexPage</Text>
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
        alignItems: "center",
        justifyContent: "center",
    },
});
