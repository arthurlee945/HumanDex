import { View, Text, StyleSheet } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { Color } from "../../../constants/styles";
import DirectButton from "./DirectButton";
function ServerError({ defaultFont }) {
    const navigation = useNavigation();
    const handleAboutRedirect = () => {
        navigation.navigate("");
    };
    return (
        <>
            <Text style={[defaultFont, styles.warningText]}>
                There's something wrong with my server! Sorry about that. Contact me to let me know!
            </Text>
            <View style={styles.buttonContainer}>
                <DirectButton color={Color.blue150} onPress={() => navigation.navigate("About")}>
                    About
                </DirectButton>
            </View>
        </>
    );
}

export default ServerError;

const styles = StyleSheet.create({
    warningText: {
        textAlign: "center",
        lineHeight: 25,
    },
    boldWarning: {
        fontWeight: "bold",
    },
    buttonContainer: {
        flexDirection: "row",
        marginTop: 25,
    },
});
