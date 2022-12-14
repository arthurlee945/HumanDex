import { View, Image, StyleSheet } from "react-native";
import { useEffect, useRef, useState } from "react";
import * as Speech from "expo-speech";
import { useIsFocused } from "@react-navigation/native";
import { addHuman } from "../../utils/database";
import { getDescription, processImage, resizeImage } from "../../utils/processing";
import { Color, outline, botShade } from "../../constants/styles";
//components
import InfoDisplayPanel from "./InfoDisplayPanel";
import CameraScreen from "./CameraScreen";
import CameraButton from "./CameraButton";
import DexIndicator from "../DexIndicator";
import DecorativeButton from "./DecorativeButton";

function Camera() {
    // states and ref
    const camera = useRef();
    const isFocused = useIsFocused();
    const [loading, setLoading] = useState();
    const [preview, setPreview] = useState();
    const [description, setDescription] = useState("");
    const [twIntervalActive, setTwIntervalActive] = useState();
    const [speechStarted, setSpeechStarted] = useState(false);
    const [warning, setWarning] = useState();
    const [serverError, setServerError] = useState({
        server: false,
        auth: false,
    });

    // functions
    const resetCamera = () => {
        camera.current?.resumePreview();
        if (twIntervalActive) clearInterval(twIntervalActive);
        Speech.stop();
        setTwIntervalActive(undefined);
        setPreview(undefined);
        setDescription("");
        setServerError((currStatus) => ({ ...currStatus, server: false, auth: false }));
    };
    const handleTakePicture = async () => {
        if (!camera.current || loading || serverError.auth || serverError.server) return;
        if (!preview) {
            setLoading(true);
            const photo = await camera.current.takePictureAsync();
            camera.current.pausePreview();

            const resizedImage = await resizeImage(photo.uri);
            const dataUri = `data:image/jpg;base64,${resizedImage.base64}`;
            setPreview(resizedImage.uri);
            try {
                const processedImage = await processImage(dataUri);
                const { age, dominant_race, dominant_emotion, gender } = processedImage.data.instance_1;
                const descriptionRes = await getDescription(age, dominant_race, gender, dominant_emotion);
                const description = descriptionRes.data.choices[0].text.replace(/^[\n]*/, "");

                const newHuman = {
                    age: age,
                    race: dominant_race,
                    gender: gender,
                    emotion: dominant_emotion,
                    description: description,
                    imageUri: resizedImage.uri,
                };

                await addHuman(newHuman);
                descriptionEffectHandler(description);
            } catch (err) {
                const status = err.response.status;
                setServerError((currStatus) => ({
                    ...currStatus,
                    server: status === 404 ? true : false,
                    auth: status === 401 ? true : false,
                }));
                if (status === 500) {
                    console.log("hello?");
                    setWarning("Sorry!!!\nI couldn't analyze the data :<");
                    resetCamera();
                }
                console.log(err, status);
            }
            setLoading(false);
        } else {
            resetCamera();
        }
    };

    useEffect(() => {
        if (!isFocused) {
            resetCamera();
        }
    }, [isFocused]);

    const descriptionEffectHandler = (description) => {
        //speech init
        const speechOptions = {
            onStart: () => {
                setSpeechStarted(true);
            },
            onStopped: () => {
                setSpeechStarted(false);
            },
            onDone: () => {
                setSpeechStarted(false);
            },
        };
        Speech.speak(description, speechOptions);
        // typewriter effect
        const fullLength = description.length;
        let length = description.length;
        const twInterval = setInterval(() => {
            if (length === 0) return clearInterval(twInterval);
            setDescription((curr) => curr + description[fullLength - length]);
            length -= 1;
        }, 30);
        setTwIntervalActive(twInterval);
    };

    return (
        <>
            <DexIndicator speechStarted={speechStarted} loading={loading} />
            <View style={styles.contentContainer}>
                <View style={styles.cameraContainer}>
                    <View style={[styles.cameraBox, outline]}>
                        <View style={styles.topIndicatorCont}>
                            <View style={styles.redTop}>
                                <Image
                                    blurRadius={15}
                                    style={styles.shadeImage}
                                    source={require("../../assets/shade.png")}
                                />
                            </View>
                            <View style={styles.redTop}>
                                <Image
                                    blurRadius={15}
                                    style={styles.shadeImage}
                                    source={require("../../assets/shade.png")}
                                />
                            </View>
                        </View>
                        <CameraScreen
                            camera={camera}
                            preview={preview}
                            loading={loading}
                            serverError={serverError}
                            warning={warning}
                            setWarning={setWarning}
                            setServerError={setServerError}
                            isFocused={isFocused}
                        />
                        <View style={styles.botIndicatorCont}>
                            <View style={styles.redBot}>
                                <Image
                                    blurRadius={15}
                                    style={styles.shadeImage}
                                    source={require("../../assets/shade.png")}
                                />
                            </View>
                            <View style={styles.lines}>
                                <DecorativeButton />
                            </View>
                        </View>
                    </View>
                </View>
                <View style={[styles.controlContainer, botShade]}>
                    <View style={styles.controlIndicator}>
                        <View style={[styles.CI, { backgroundColor: Color.red100 }]}></View>
                        <View style={[styles.CI, { backgroundColor: Color.blue100 }]}></View>
                    </View>
                    <View style={styles.mainControl}>
                        <InfoDisplayPanel>{description}</InfoDisplayPanel>
                        <CameraButton onPress={handleTakePicture} />
                    </View>
                </View>
            </View>
        </>
    );
}

export default Camera;
const styles = StyleSheet.create({
    contentContainer: {
        flex: 1,
        width: "100%",
        paddingHorizontal: 25,
        paddingVertical: 30,
    },
    //camera styles
    cameraContainer: {
        flex: 1,
        alignItems: "center",
        justifyContent: "center",
    },
    cameraBox: {
        height: "100%",
        width: "100%",
        paddingHorizontal: 25,
        paddingVertical: 15,
        backgroundColor: Color.white100,
        borderRadius: 10,
        borderBottomLeftRadius: 40,
    },
    topIndicatorCont: {
        justifyContent: "center",
        flexDirection: "row",
        paddingBottom: 15,
    },
    redTop: {
        width: 10,
        height: 10,
        borderRadius: 5,
        backgroundColor: Color.red100,
        marginHorizontal: 10,
        opacity: 0.8,
    },
    shadeImage: {
        width: "100%",
        height: "100%",
    },
    redBot: {
        width: 15,
        height: 15,
        borderRadius: 8,
        backgroundColor: Color.red100,
        opacity: 0.8,
    },
    botIndicatorCont: {
        flexDirection: "row",
        justifyContent: "space-between",
        paddingTop: 15,
    },
    lines: {
        width: "10%",
        aspectRatio: 1 / 0.75,
    },

    //control styles
    controlContainer: {
        flex: 0.6,
    },
    controlIndicator: {
        flexDirection: "row",
        justifyContent: "center",
        paddingTop: 20,
    },
    CI: {
        width: "14%",
        height: 5,
        borderRadius: 4,
        borderWidth: 1,
        marginHorizontal: 15,
    },
    mainControl: {
        flex: 1,
        paddingHorizontal: 10,
        paddingVertical: 20,
        flexDirection: "row",
        justifyContent: "space-between",
    },
});
