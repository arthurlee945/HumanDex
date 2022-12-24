import { View, Text, Button } from "react-native";
function CollectionScreen({ navigation }) {
    return (
        <View>
            <Text>Collection</Text>
            <Button title="button" onPress={() => navigation.navigate("Dex")} />
        </View>
    );
}

export default CollectionScreen;
