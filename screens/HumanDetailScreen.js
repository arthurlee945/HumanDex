import { useState, useEffect } from "react";
import { View, StyleSheet } from "react-native";
import { fetchHumanDetail } from "../utils/database";
//components
import ScreenContentView from "../components/ScreenContentView";
import NavBar from "../components/Nav/NavBar";
import DetailContent from "../components/detail/DetailContent";
function HumanDetailScreen({ route }) {
    const humanId = route.params?.humanId;
    const [humanDetail, setHumanDetail] = useState();
    useEffect(() => {
        (async () => {
            const humanData = await fetchHumanDetail(humanId);
            setHumanDetail(humanData);
        })();
    }, []);
    return (
        <View style={styles.screen}>
            <ScreenContentView>
                <NavBar name={humanDetail ? `No. ${humanDetail.id}` : ""} />
                <DetailContent human={humanDetail} />
            </ScreenContentView>
        </View>
    );
}

export default HumanDetailScreen;

const styles = StyleSheet.create({
    screen: {
        flex: 1,
    },
});
