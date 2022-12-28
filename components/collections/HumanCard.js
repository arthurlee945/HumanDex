import { useRef } from "react";
import { Image, Text, View, Pressable, StyleSheet, useWindowDimensions, Animated, ImageBackground } from "react-native";
import { Color, outline, botShade } from "../../constants/styles";
//component
import TrashIconButton from "./TrashIconButton";
function HumanCard({ human, index, onSelect, onDelete }) {
    const cardRef = useRef(new Animated.Value(0)).current;
    const { fontScale } = useWindowDimensions();
    const defaultFontSizing = {
        info: {
            fontSize: fontScale * 15,
            color: Color.white,
        },
        infoTitle: {
            fontSize: fontScale * 14,
            color: Color.white,
        },
    };
    const AnimatablePressable = Animated.createAnimatedComponent(Pressable);
    const handleCardClick = () => {
        const posDefaultConfig = {
            useNativeDriver: true,
            duration: 40,
        };
        Animated.sequence([
            Animated.loop(
                Animated.sequence([
                    Animated.timing(cardRef, { ...posDefaultConfig, toValue: 5 }),
                    Animated.timing(cardRef, { ...posDefaultConfig, toValue: -5 }),
                ]),
                {
                    iterations: 3,
                }
            ),
            Animated.timing(cardRef, { ...posDefaultConfig, toValue: 0, duration: 20 }),
        ]).start(({ finished }) => finished && onSelect(human.id));
    };

    return (
        <AnimatablePressable
            style={[
                outline,
                botShade,
                stlyes.card,
                {
                    transform: [{ translateX: cardRef }],
                },
            ]}
            onPress={handleCardClick}
        >
            <ImageBackground
                source={require("../../assets/lines.png")}
                resizeMode="repeat"
                style={stlyes.lineBgContainer}
            >
                <Image style={stlyes.image} source={{ uri: human.imageUri }} />
                <View style={stlyes.container}>
                    <View style={stlyes.infoContainer}>
                        <Text style={[defaultFontSizing.infoTitle, stlyes.infoDec]}>
                            No. <Text style={[defaultFontSizing.info, stlyes.info]}>{index + 1}</Text>
                        </Text>
                        <Text style={[defaultFontSizing.infoTitle]}>
                            Age: <Text style={[defaultFontSizing.info, stlyes.info]}>{human.age}</Text>
                        </Text>
                        <Text style={[defaultFontSizing.infoTitle]}>
                            Race: <Text style={[defaultFontSizing.info, stlyes.info]}>{human.race}</Text>
                        </Text>
                        <Text style={[defaultFontSizing.infoTitle]}>
                            Gender: <Text style={[defaultFontSizing.info, stlyes.info]}>{human.gender}</Text>
                        </Text>
                        <Text style={[defaultFontSizing.infoTitle]}>
                            Emotion: <Text style={[defaultFontSizing.info, stlyes.info]}>{human.emotion}</Text>
                        </Text>
                    </View>
                    <TrashIconButton
                        onPress={onDelete.bind(this, human.id, human.imageUri)}
                        color={Color.red100}
                        bgColor={Color.white}
                        size={32}
                    />
                </View>
            </ImageBackground>
        </AnimatablePressable>
    );
}

export default HumanCard;
const stlyes = StyleSheet.create({
    card: {
        margin: 20,
        borderRadius: 10,
    },
    lineBgContainer: {
        flexDirection: "row",
        padding: 15,
        borderRadius: 10,
        backgroundColor: Color.red150,
    },
    image: {
        width: "50%",
        aspectRatio: 1 / 1,
        borderRadius: 10,
        borderWidth: 5,
        borderColor: Color.white,
    },
    container: {
        flex: 1,
        justifyContent: "space-between",
        alignItems: "center",
        paddingLeft: 15,
        paddingVertical: 5,
    },
    infoContainer: {
        width: "100%",
    },
    info: {
        fontWeight: "bold",
        textTransform: "uppercase",
    },
    deleteButton: {},
});
