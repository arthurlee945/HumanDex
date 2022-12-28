import { View, StyleSheet, Linking } from "react-native";
import { Color } from "../../constants/styles";
import SocialLinkButton from "./SocialLinkButton";
function SocialLinks() {
    return (
        <View style={styles.socialContainer}>
            <SocialLinkButton
                name="github"
                size={32}
                color={Color.white}
                onPress={() => {
                    Linking.openURL("https://github.com/arthurlee945/HumanDex");
                }}
            />
            <SocialLinkButton
                name="instagram"
                size={32}
                color={Color.white}
                onPress={() => {
                    Linking.openURL("https://www.instagram.com/arthur_lee94/");
                }}
            />
            <SocialLinkButton
                name="mail"
                size={32}
                color={Color.white}
                onPress={() => {
                    Linking.openURL("mailto:arthur.lee945@gmail.com");
                }}
            />
        </View>
    );
}

export default SocialLinks;

const styles = StyleSheet.create({
    socialContainer: {
        flexDirection: "row",
        justifyContent: "space-around",
        marginTop: 15,
    },
});
