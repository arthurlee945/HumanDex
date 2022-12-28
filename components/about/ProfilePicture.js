import { useRef, useState } from "react";
import { View, Image, Pressable, Animated, StyleSheet } from "react-native";
import { Color, botShade, outline } from "../../constants/styles";
function ProfilePicture() {
    const imageRef = useRef({ front: new Animated.Value(1), back: new Animated.Value(0) }).current;
    const [frontSelected, setFrontSelected] = useState(true);
    const AnimatablePressable = Animated.createAnimatedComponent(Pressable);
    const handleImageClick = (front) => {
        setFrontSelected(!front);
        const baseConfig = {
            useNativeDriver: true,
            duration: 150,
        };
        const frontAni = Animated.timing(imageRef.front, { ...baseConfig, toValue: front ? 0 : 1 });
        const backAni = Animated.timing(imageRef.back, { ...baseConfig, toValue: front ? 1 : 0 });
        const seq = front ? [frontAni, backAni] : [backAni, frontAni];
        Animated.sequence(seq).start();
    };
    return (
        <View style={styles.imageContainer}>
            <View style={[styles.imageOuter, botShade, outline]}>
                <View style={styles.masterImageContainer}>
                    <AnimatablePressable
                        onPress={() => {
                            handleImageClick(false);
                        }}
                        style={[
                            styles.imageButton,
                            { transform: [{ scaleX: imageRef.back }], zIndex: frontSelected ? 0 : 1 },
                        ]}
                    >
                        <Image style={[styles.imageInner, outline]} source={require("../../assets/profile-org.jpg")} />
                    </AnimatablePressable>
                    <AnimatablePressable
                        onPress={() => {
                            handleImageClick(true);
                        }}
                        style={[
                            styles.imageButton,
                            { transform: [{ scaleX: imageRef.front }], zIndex: frontSelected ? 1 : 0 },
                        ]}
                    >
                        <Image style={[styles.imageInner, outline]} source={require("../../assets/profile.png")} />
                        <Image
                            style={styles.pixelTextImage}
                            source={require("../../assets/pixel-org.png")}
                            resizeMode="repeat"
                        />
                    </AnimatablePressable>
                </View>
            </View>
        </View>
    );
}

export default ProfilePicture;
const styles = StyleSheet.create({
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
    masterImageContainer: {
        width: "94%",
        height: "94%",
        borderRadius: 15,
        backgroundColor: Color.black,
    },
    imageButton: {
        position: "absolute",
        width: "100%",
        height: "100%",
        borderRadius: 15,
    },
    imageInner: {
        width: "100%",
        height: "100%",
        borderRadius: 15,
    },
    pixelTextImage: {
        position: "absolute",
        top: 0,
        left: 0,
        width: "100%",
        height: "100%",
        opacity: 0.5,
    },
});
