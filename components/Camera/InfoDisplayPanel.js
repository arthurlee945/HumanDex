import { ScrollView, Image, View, Text, StyleSheet, useWindowDimensions } from "react-native";
import { Color, outline } from "../../constants/styles";
function InfoDisplayPanel({ children }) {
    const { fontScale } = useWindowDimensions();
    return (
        <View style={[styles.mainDisplayContainer, outline]}>
            <Image style={styles.bgImage} source={require("../../assets/pixel-org.png")} />
            <ScrollView
                style={styles.displayPanel}
                contentContainerStyle={{
                    padding: 5,
                }}
            >
                <Text style={[styles.text, { fontSize: 17 * fontScale }]}>{children}</Text>
            </ScrollView>
        </View>
    );
}

export default InfoDisplayPanel;

const styles = StyleSheet.create({
    mainDisplayContainer: {
        width: "65%",
        backgroundColor: Color.green200,
        borderRadius: 5,
        overflow: "hidden",
    },
    displayPanel: {
        flex: 1,
        borderRadius: 5,
    },
    text: {
        includeFontPadding: false,
        textAlignVertical: "center",
        lineHeight: 20,
    },
    bgImage: {
        position: "absolute",
        flex: 1,
        width: "100%",
        height: "100%",
        resizeMode: "repeat",
        opacity: 0.25,
    },
});
