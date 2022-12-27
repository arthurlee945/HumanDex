import { View, Text, FlatList, StyleSheet, useWindowDimensions } from "react-native";
import { Color } from "../../constants/styles";
//components
import HumanCard from "./HumanCard";

function CollectionList({ humans, onSelect, onDelete }) {
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
            renderItem={({ item, index }) => (
                <HumanCard index={index} human={item} onSelect={onSelect} onDelete={onDelete} />
            )}
        />
    );
}

export default CollectionList;

const styles = StyleSheet.create({
    defaultSizing: {
        flex: 1,
        width: "100%",
        height: "100%",
    },
    noItemContainer: {
        alignItems: "center",
        justifyContent: "center",
    },
    noItemText: {
        color: Color.white,
    },
    flContainer: {},
});
