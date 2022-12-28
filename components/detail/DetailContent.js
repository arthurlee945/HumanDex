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
    const UnderLine = () => <View style={styles.underline}></View>;
    return (
        <ScrollView style={styles.contentContainer}>
            <View style={styles.imageContainer}>
                <View style={[styles.imageOuter, botShade, outline]}>
                    <Image style={[styles.imageInner, outline]} source={{ uri: human.imageUri }} />
                </View>
            </View>
            <View style={[styles.infoOuterContainer, outline]}>
                <LinearGradient style={[styles.infoContainer]} colors={[Color.blue300, Color.blue250, Color.blue300]}>
                    <Text style={[defaultFontSizing.infoTitle]}>
                        Age: <Text style={[defaultFontSizing.info]}>{human.age}</Text>
                    </Text>
                    <UnderLine />
                    <Text style={[defaultFontSizing.infoTitle]}>
                        Race: <Text style={[defaultFontSizing.info]}>{human.race}</Text>
                    </Text>
                    <UnderLine />
                    <Text style={[defaultFontSizing.infoTitle]}>
                        Gender: <Text style={[defaultFontSizing.info]}>{human.gender}</Text>
                    </Text>
                    <UnderLine />
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
        height: 1,
        width: "100%",
        backgroundColor: Color.white,
        marginTop: 1,
        marginBottom: 15,
        opacity: 0.5,
    },
});
