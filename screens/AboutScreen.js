import { View, StyleSheet } from "react-native";
//components
import ScreenContentView from "../components/ScreenContentView";
import NavBar from "../components/Nav/NavBar";
import AboutContent from "../components/about/AboutContent";
function AboutScreen() {
    return (
        <View style={styles.screen}>
            <ScreenContentView>
                <NavBar name="About Me" aboutButton={false} homeButton={true} />
                <AboutContent />
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
