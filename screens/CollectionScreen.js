import { useState, useEffect } from "react";
import { View, StyleSheet } from "react-native";
import { useIsFocused } from "@react-navigation/native";
import { fetchHumans, deleteHuman } from "../utils/database";
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
    const renderCards = async () => {
        setLoading(true);
        try {
            const loadedHumans = await fetchHumans();
            setHumans(loadedHumans);
        } catch (err) {
            console.log(err);
        }
        setLoading(false);
    };
    const handleDeleteCard = async (id) => {
        try {
            await deleteHuman(id);
            renderCards();
        } catch (err) {
            console.log(err);
        }
    };
    const handleCardClick = (id) => {
        navigation.navigate("HumanDetail", {
            humanId: id,
        });
    };

    useEffect(() => {
        isFocused && renderCards();
    }, [isFocused]);
    return (
        <View style={styles.screen}>
            <ScreenContentView style={styles.container}>
                <NavBar name="Collection" />
                <View style={styles.contentContainer}>
                    <CollectionList humans={humans} onSelect={handleCardClick} onDelete={handleDeleteCard} />
                    {loading && <LoadingIndicator color={Color.white} />}
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
        alignItems: "center",
        justifyContent: "center",
    },
});
