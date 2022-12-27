import { View, Text, Dimensions, useWindowDimensions, StyleSheet } from "react-native";
import { Color } from "../../constants/styles";
import { useNavigation } from "@react-navigation/native";
//components
import ArrowButton from "./ArrowButton";
import AboutButton from "./AboutButton";
function NavBar({ name }) {
    const navigation = useNavigation();
    const { fontScale } = useWindowDimensions();
    return (
        <View style={styles.navContainer}>
            <ArrowButton
                style={styles.arrow}
                color={Color.white}
                onPress={() => {
                    navigation.goBack();
                }}
            />
            <Text style={[styles.name, { fontSize: 16 * fontScale }]}>{name}</Text>
            <AboutButton
                style={styles.about}
                onPress={() => {
                    navigation.navigate("About");
                }}
            />
        </View>
    );
}

export default NavBar;
const { width } = Dimensions.get("window");
const styles = StyleSheet.create({
    navContainer: {
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
        paddingHorizontal: 20,
        paddingTop: 10,
        paddingBottom: 15,
        borderBottomWidth: 2,
        width: "100%",
    },
    name: {
        color: Color.white,
        fontWeight: "bold",
        textTransform: "uppercase",
    },
    arrow: {
        width: width * 0.1,
        height: width * 0.075,
        aspectRatio: 1 / 0.75,
        alignItems: "center",
    },
    about: {
        width: width * 0.11,
        height: width * 0.11,
        aspectRatio: 1 / 1,
    },
});
