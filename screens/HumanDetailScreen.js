import { View, Text, StyleSheet } from "react-native";
//components
import ScreenContentView from "../components/ScreenContentView";
import NavBar from "../components/Nav/NavBar";
function HumanDetailScreen({ params }) {
    return (
        <View style={styles.screen}>
            <ScreenContentView>
                <NavBar />
                <Text>Detail Screen</Text>
            </ScreenContentView>
        </View>
    );
}

export default HumanDetailScreen;

const styles = StyleSheet.create({
    screen: {
        flex: 1,
    },
});
