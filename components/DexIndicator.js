import { View, Dimensions, Image, StyleSheet } from "react-native";
import { Color, outline } from "../constants/styles";
//components
import RippleGradient from "./RippleGradient";
import LibraryButton from "./Camera/LibraryButton";
function DexIndicator({ speechStarted }) {
    return (
        <View style={styles.Container}>
            <View style={[styles.indicatorContainer]}>
                <View style={styles.mainIndicatorOuter}>
                    <View style={styles.mainIndicatorInner}>
                        <Image blurRadius={15} style={styles.shadeImage} source={require("../assets/shade.png")} />
                        {speechStarted && (
                            <RippleGradient rippleCount={1} color={Color.blue150} looped={true} duration={750} />
                        )}
                    </View>
                </View>
                <View style={styles.red}>
                    <Image blurRadius={15} style={styles.shadeImage} source={require("../assets/shade.png")} />
                </View>
                <View style={styles.yellow}>
                    <Image blurRadius={15} style={styles.shadeImage} source={require("../assets/shade.png")} />
                </View>
                <View style={styles.green}>
                    <Image blurRadius={15} style={styles.shadeImage} source={require("../assets/shade.png")} />
                </View>
            </View>
            <LibraryButton />
        </View>
    );
}

export default DexIndicator;
const { width } = Dimensions.get("window");
const indicators = {
    main: {
        width: width * 0.18,
        height: width * 0.18,
        borderRadius: (width * 0.18) / 2,
        marginRight: 10,
        ...outline,
    },
    mainCore: {
        width: width * 0.15,
        height: width * 0.15,
        borderRadius: (width * 0.15) / 2,
        ...outline,
    },
    sub: {
        width: width * 0.05,
        height: width * 0.05,
        borderRadius: (width * 0.05) / 2,
        marginRight: 15,
        ...outline,
    },
};

const styles = StyleSheet.create({
    Container: {
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        paddingHorizontal: 20,
        paddingTop: 10,
        paddingBottom: 15,
        borderBottomWidth: 2,
        width: "100%",
    },
    indicatorContainer: {
        flexDirection: "row",
    },
    mainIndicatorOuter: {
        ...indicators.main,
        backgroundColor: Color.white,
        alignItems: "center",
        justifyContent: "center",
    },
    mainIndicatorInner: {
        ...indicators.mainCore,
        backgroundColor: Color.blue100,
    },
    shadeImage: {
        width: "100%",
        height: "100%",
        opacity: 0.6,
    },
    red: {
        ...indicators.sub,
        backgroundColor: Color.red100,
    },
    yellow: {
        ...indicators.sub,
        backgroundColor: Color.yellow100,
    },
    green: {
        ...indicators.sub,
        backgroundColor: Color.green100,
    },
});
