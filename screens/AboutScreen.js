import { View, Text, StyleSheet } from "react-native";
//components
import ScreenContentView from "../components/ScreenContentView";
import NavBar from "../components/Nav/NavBar";
function AboutScreen() {
    return (
        <View style={styles.screen}>
            <ScreenContentView>
                <NavBar name="About" aboutButton={false} />
                <Text>About Screen</Text>
            </ScreenContentView>
        </View>
    );
}

export default AboutScreen;
const styles = StyleSheet.create({
    screen: {
        flex: 1,
    },
});
