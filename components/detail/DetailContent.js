import { ScrollView, View, Image, Text, StyleSheet, Dimensions, useWindowDimensions } from "react-native";
import { Color, botShade, outline } from "../../constants/styles";
import { LinearGradient } from "expo-linear-gradient";
//components
import LoadingIndicator from "../LoadingIndicator";
function DetailContent({ human }) {
    const { fontScale } = useWindowDimensions();
    const defaultFontSizing = {
        info: {
            fontSize: fontScale * 16,
            color: Color.white,
            fontWeight: "bold",
        },
        infoTitle: {
            fontSize: fontScale * 14,
            color: Color.white,
        },
    };
    if (!human) {
        return <LoadingIndicator color={Color.white} />;
    }
    return (
        <ScrollView style={styles.contentContainer}>
            <View style={styles.imageContainer}>
                <View style={[styles.imageOuter, botShade, outline]}>
                    <Image style={[styles.imageInner, outline]} source={{ uri: human.imageUri }} />
                </View>
            </View>
            <View style={[styles.infoOuterContainer, outline]}>
                <LinearGradient style={[styles.infoContainer]} colors={[Color.blue300, Color.blue250, Color.blue300]}>
                    <Text style={[defaultFontSizing.infoTitle, styles.underline]}>
                        Age: <Text style={[defaultFontSizing.info]}>{human.age}</Text>
                    </Text>

                    <Text style={[defaultFontSizing.infoTitle, styles.underline]}>
                        Race: <Text style={[defaultFontSizing.info]}>{human.race}</Text>
                    </Text>

                    <Text style={[defaultFontSizing.infoTitle, styles.underline]}>
                        Gender: <Text style={[defaultFontSizing.info]}>{human.gender}</Text>
                    </Text>

                    <Text style={[defaultFontSizing.infoTitle]}>Description:</Text>
                    <Text style={[defaultFontSizing.info]}>{human.description}</Text>
                </LinearGradient>
            </View>
        </ScrollView>
    );
}

export default DetailContent;
const styles = StyleSheet.create({
    contentContainer: {
        flex: 1,
        paddingHorizontal: 45,
    },
    imageContainer: {
        width: "100%",
        alignItems: "center",
        marginTop: 20,
        marginBottom: 15,
    },
    imageOuter: {
        width: "100%",
        aspectRatio: 1 / 1,
        borderRadius: 20,
        backgroundColor: Color.white,
        overflow: "hidden",
        alignItems: "center",
        justifyContent: "center",
    },
    imageInner: {
        width: "94%",
        height: "94%",
        borderRadius: 15,
    },
    infoOuterContainer: {
        borderRadius: 5,
        backgroundColor: Color.blue300,
        overflow: "hidden",
    },
    infoContainer: {
        padding: 20,
        borderRadius: 5,
    },
    underline: {
        borderBottomWidth: 1,
        borderColor: Color.gray,
        marginBottom: 15,
        paddingBottom: 1,
    },
});
