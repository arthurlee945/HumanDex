import { View, Text, Button, StyleSheet } from "react-native";
import ScreenContentView from "../components/ScreenContentView";
function CollectionScreen({ navigation }) {
    return (
        <View style={styles.screen}>
            <ScreenContentView style={styles.contentContainer}>
                <Text>Collection</Text>
                <Button title="button" onPress={() => navigation.navigate("Dex")} />
            </ScreenContentView>
        </View>
    );
}

export default CollectionScreen;

const styles = StyleSheet.create({
    screen: {
        flex: 1,
        overflow: "hidden",
    },
    contentContainer: {
        flex: 1,
    },
});
