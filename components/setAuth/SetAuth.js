import { useState } from "react";
import { View, Text, StyleSheet, TextInput, useWindowDimensions, Linking, Keyboard } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { updateOpenAiKey } from "../../utils/database";
import { Color, outline } from "../../constants/styles";
//components
import DirectButton from "../Camera/errorPreviews/DirectButton";
import LoadingIndicator from "../LoadingIndicator";

function SetAuth() {
    const [input, setInput] = useState("");
    const [loading, setLoading] = useState(false);
    const navigation = useNavigation();
    const { fontScale } = useWindowDimensions();
    const defaultFontSizing = {
        title: { fontSize: fontScale * 18, color: Color.white, fontWeight: "bold" },
        input: { fontSize: fontScale * 16, color: Color.black },
    };
    const handleNewKeySubmit = async () => {
        if (loading) return;
        setLoading(true);
        Keyboard.dismiss();
        let filtered = input.replace(/^[ ]*/, "");
        filtered = filtered.replace(/[ ]*$/, "");
        setInput("");
        try {
            await updateOpenAiKey(filtered);
            navigation.goBack();
        } catch (err) {
            console.log(err);
        }
        setLoading(false);
    };
    return (
        <View style={styles.authContainer}>
            <Text style={defaultFontSizing.title}>Open AI API Key</Text>
            <TextInput
                value={input}
                onChangeText={(text) => setInput(text)}
                style={[styles.input, outline, defaultFontSizing.input]}
            />
            <View style={styles.buttonContainer}>
                <DirectButton color={Color.red100} onPress={() => Linking.openURL("https://openai.com/api/")}>
                    Open Ai
                </DirectButton>
                <DirectButton color={Color.blue150} onPress={handleNewKeySubmit}>
                    Update
                </DirectButton>
            </View>
            {loading && <LoadingIndicator color={Color.blue100} />}
        </View>
    );
}

export default SetAuth;

const styles = StyleSheet.create({
    authContainer: {
        flex: 1,
        padding: 20,
        alignItems: "center",
        justifyContent: "center",
    },
    input: {
        marginTop: 20,
        width: "100%",
        borderRadius: 15,
        backgroundColor: Color.white,
        paddingHorizontal: 15,
        paddingVertical: 5,
    },
    buttonContainer: {
        flexDirection: "row",
        marginTop: 25,
    },
});
