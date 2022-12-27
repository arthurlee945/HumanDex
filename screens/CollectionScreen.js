import { useState, useEffect } from "react";
import { View, Text, Button, StyleSheet } from "react-native";
import { useIsFocused } from "@react-navigation/native";
import { fetchHumans } from "../utils/database";
//Components
import ScreenContentView from "../components/ScreenContentView";
import NavBar from "../components/Nav/NavBar";
import CollectionList from "../components/collections/CollectionList";
import LoadingIndicator from "../components/LoadingIndicator";
import { Color } from "../constants/styles";
function CollectionScreen({ navigation }) {
    const [humans, setHumans] = useState([]);
    const [loading, setLoading] = useState(false);
    const isFocused = useIsFocused();

    useEffect(() => {
        isFocused &&
            (async () => {
                setLoading(true);
                const loadedHumans = await fetchHumans();
                setHumans(loadedHumans);
                setLoading(false);
            })();
    }, [isFocused]);
    return (
        <View style={styles.screen}>
            <ScreenContentView style={styles.container}>
                <NavBar name="Collection" />
                <View style={styles.contentContainer}>
                    <CollectionList humans={humans} />
                    {loading && <LoadingIndicator color={Color.blue100} />}
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
        flex: 1,
        padding: 20,
        alignItems: "center",
        justifyContent: "center",
    },
});
