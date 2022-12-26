import { View, Text, Button, StyleSheet } from "react-native";
//Components
import ScreenContentView from "../components/ScreenContentView";
import NavBar from "../components/Nav/NavBar";
function CollectionScreen({ navigation }) {
    return (
        <View style={styles.screen}>
            <ScreenContentView style={styles.container}>
                <NavBar name="Collection" />
                <View style={styles.contentContainer}>
                    <Button title="button" onPress={() => navigation.navigate("Dex")} />
                </View>
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
    container: {
        flex: 1,
    },
    contentContainer: {
        padding: 20,
    },
});
