import { View, Text, FlatList, StyleSheet, useWindowDimensions } from "react-native";
import { Color } from "../../constants/styles";
//components
import HumanCard from "./HumanCard";

function CollectionList({ humans }) {
    const { fontScale } = useWindowDimensions();
    if (!humans || humans.length === 0) {
        return (
            <View style={[styles.defaultSizing, styles.noItemContainer]}>
                <Text style={[styles.noItemText, { fontSize: fontScale * 16 }]}>Gotta Catch 'Em All!</Text>
            </View>
        );
    }

    return (
        <FlatList
            style={[styles.defaultSizing, styles.flContainer]}
            data={humans}
            keyExtractor={(item) => item.id}
            rednerItem={({ item, index }) => <HumanCard human={item} />}
        />
    );
}

export default CollectionList;

const styles = StyleSheet.create({
    defaultSizing: {
        width: "100%",
        height: "100%",
    },
    noItemContainer: {
        flex: 1,
        alignItems: "center",
        justifyContent: "center",
    },
    noItemText: {
        color: Color.white,
    },
    flContainer: {
        flex: 1,
        borderWidth: 1,
    },
});
