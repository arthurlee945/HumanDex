import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { Color } from "../../../constants/styles";
import DirectButton from "./DirectButton";
function AuthError({ defaultFont }) {
    const navigation = useNavigation();
    return (
        <>
            <Text style={[defaultFont, styles.warningText]}>
                It Looks like you will need to update <Text style={styles.boldWarning}>Open AI API Key</Text>!
            </Text>
            <View style={styles.buttonContainer}>
                <DirectButton color={Color.blue150} onPress={() => navigation.navigate("SetAuth")}>
                    Update
                </DirectButton>
            </View>
        </>
    );
}

export default AuthError;

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
