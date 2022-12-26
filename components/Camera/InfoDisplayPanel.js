import { ScrollView, View, Text, StyleSheet, useWindowDimensions } from "react-native";
import { Color, outline } from "../../constants/styles";
function InfoDisplayPanel({ children }) {
    const { fontScale } = useWindowDimensions();
    return (
        <ScrollView style={[styles.displayPanel, outline]}>
            <View>
                <Text style={[styles.text, { fontSize: 16 * fontScale }]}>{children}</Text>
            </View>
        </ScrollView>
    );
}

export default InfoDisplayPanel;

const styles = StyleSheet.create({
    displayPanel: {
        width: "65%",
        backgroundColor: Color.green200,
        padding: 5,
        borderRadius: 5,
    },
    text: {
        paddingBottom: 14,
    },
});
