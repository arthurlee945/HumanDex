import { ScrollView, View, Text, StyleSheet, useWindowDimensions } from "react-native";
import { Color, outline } from "../../constants/styles";
import { LinearGradient } from "expo-linear-gradient";
//components
import ProfilePicture from "./ProfilePicture";
import SocialLinks from "./SocialLinks";
function AboutContent() {
    const { fontScale } = useWindowDimensions();
    const defaultFont = {
        title: { fontSize: fontScale * 18, color: Color.white, textAlign: "center", fontWeight: "bold" },
        subTexts: {
            fontSize: fontScale * 16,
            color: Color.white,
            textAlign: "center",
            fontWeight: "bold",
            marginBottom: 10,
        },
    };
    const UnderLine = () => <View style={styles.underline}></View>;
    return (
        <ScrollView style={styles.container}>
            <View style={styles.introContainer}>
                <Text style={defaultFont.title}>Hi! My Name is Arthur!</Text>
                <UnderLine />
            </View>
            <ProfilePicture />
            <LinearGradient
                style={[styles.infoContainer, outline]}
                colors={[Color.blue300, Color.blue250, Color.blue300]}
            >
                <Text style={defaultFont.subTexts}>I am a web developer based in Chicago.</Text>
                <Text style={[defaultFont.subTexts]}>This project was inspired by Pokemon!</Text>
                <Text style={[defaultFont.subTexts]}>(If you didn't get it already)</Text>
                <Text style={[defaultFont.subTexts]}>
                    Take a look at my other projects or learn more about me by clicking links below!!
                </Text>
                <SocialLinks />
            </LinearGradient>
        </ScrollView>
    );
}

export default AboutContent;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingHorizontal: 40,
    },
    introContainer: {
        width: "100%",
        marginTop: 20,
    },
    infoContainer: {
        padding: 15,
        borderRadius: 5,
        backgroundColor: Color.blue300,
        overflow: "hidden",
    },
    underline: {
        height: 2,
        width: "100%",
        backgroundColor: Color.white,
        marginTop: 1,
        opacity: 0.5,
    },
});