import Constants from "expo-constants";
import axios from "axios";
const { DF_API_URL, OPENAI_URL, OPENAI_API_KEY } = Constants.expoConfig.extra;

export const getDescription = (age, race, gender, emotion) => {
    const propmt = `Write a funny and goofy two to three sentences description of a person who is ${age} years old, ${race}, ${gender}, and currently ${emotion}.`;
    const header = {
        Authorization: `Bearer ${OPENAI_API_KEY}`,
    };
    const data = {
        model: "text-davinci-003",
        prompt: propmt,
        temperature: 0.75,
        max_tokens: 60,
        top_p: 1,
        frequency_penalty: 0.5,
        presence_penalty: 0.5,
    };
    return axios.post(OPENAI_URL, data, {
        headers: header,
    });
};

export const processImage = (dataUrl) => {
    const data = {
        img: [dataUrl],
    };
    return axios.post(`${DF_API_URL}/analyze`, data);
};

export const resizeImage = () => {};
// import { Audio } from 'expo-av';

// async function processAudioFile(filePath) {
//   const soundObject = new Audio.Sound();

//   try {
//     await soundObject.loadAsync({
//       uri: filePath,
//     });

//     const duration = soundObject.getDurationMillis();
//     const interval = 100; // interval in milliseconds

//     // Start the sound and begin processing at intervals
//     await soundObject.playAsync();
//     setInterval(async () => {
//       const decibelLevel = await soundObject.getDecibelLevelAsync();
//       console.log(`Decibel level: ${decibelLevel}`);
//     }, interval);
//   } catch (error) {
//     console.error(error);
//   }
// }
