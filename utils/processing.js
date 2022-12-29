import axios from "axios";
import Constants from "expo-constants";
import { manipulateAsync } from "expo-image-manipulator";
import { deleteAsync } from "expo-file-system";
import { retrieveOpenAiKey } from "./database";
//constants
const { DF_API_URL, OPENAI_URL } = Constants.expoConfig.extra;

export const getDescription = async (age, race, gender, emotion) => {
    console.log("Open AI Generating Prompt");
    const retrievedKey = await retrieveOpenAiKey();
    const propmt = `Write a funny and goofy two to three sentences description of a person who is ${age} years old, ${race}, ${gender}, and currently ${emotion}.`;
    const header = {
        Authorization: `Bsearer ${retrievedKey.apiKey}`,
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
    console.log("Start processing Image");
    const data = {
        img: [dataUrl],
    };
    return axios.post(`${DF_API_URL}/analyze`, data);
};

export const resizeImage = async (imageUri) => {
    console.log("Resizing Image");
    const actions = [
        {
            resize: {
                width: 750,
            },
        },
    ];
    const options = {
        base64: true,
    };
    const processedImage = await manipulateAsync(imageUri, actions, options);
    try {
        await deleteAsync(imageUri);
    } catch (err) {
        console.log(err);
    }
    return processedImage;
};
