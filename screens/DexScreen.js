import { StyleSheet, View, Text } from "react-native";
//Components and Utils
import ScreenContentView from "../components/ScreenContentView";
import Cover from "../components/introCover/Cover";

function DexScreen() {
    return (
        <View style={styles.screen}>
            <ScreenContentView style={styles.contentContainer}>
                <Text>DexPage</Text>
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
        justifyContent: "center",
    },
});
