import { View, Text, Pressable, StyleSheet, useWindowDimensions } from "react-native";

function HumanCard({ human }) {
    console.log(human);
    console.log("hello?");
    return (
        <View style={stlyes.card}>
            <Text>{human.description}</Text>
        </View>
    );
}

export default HumanCard;

const stlyes = StyleSheet.create({
    card: {
        borderWidth: 2,
        width: 100,
        height: 100,
    },
});
