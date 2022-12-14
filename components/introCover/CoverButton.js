import {
    Animated,
    View,
    Pressable,
    StyleSheet,
    useWindowDimensions,
} from "react-native";

function CoverButton({ onPress, pos }) {
    return (
        <View>
            <Pressable onPress={onPress}>
                <Animated.View style={styles.innerButton}></Animated.View>
            </Pressable>
        </View>
    );
}

export default CoverButton;

const styles = StyleSheet.create({});
