import TopCover from "./TopCover";
import BottomCover from "./BottomCover";
import { Animated, useWindowDimensions, Easing } from "react-native";
import { useRef, useState } from "react";
function Cover() {
    const { width, height } = useWindowDimensions();
    const [display, setDisplay] = useState(true);
    const coverRef = useRef({
        top: new Animated.Value(-50),
        bottom: new Animated.Value(50),
    });
    const handleButtonClick = () => {
        const topCoverSize = height * 0.5 + (width * 0.35) / 2,
            botCoverSize = height * 0.65,
            duration = 500,
            baseConfig = {
                duration: duration,
                useNativeDriver: true,
                delay: 100,
                easing: Easing.back(),
            };
        Animated.parallel([
            Animated.timing(coverRef.current.top, {
                toValue: -1 * topCoverSize,
                ...baseConfig,
            }),
            Animated.timing(coverRef.current.bottom, {
                toValue: botCoverSize,
                ...baseConfig,
            }),
        ]).start(({ finished }) => {
            finished && setDisplay(false);
        });
    };
    return (
        <>
            {display && <TopCover pos={coverRef.current.top} onPress={handleButtonClick} />}
            {display && <BottomCover pos={coverRef.current.bottom} />}
        </>
    );
}

export default Cover;
