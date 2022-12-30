import * as dotenv from "dotenv";
dotenv.config();

module.exports = ({ config }) => {
    return {
        ...config,
        extra: {
            DF_API_URL: process.env.DF_API_URL,
            OPENAI_URL: process.env.OPENAI_URL,
            OPENAI_API_KEY: process.env.OPENAI_API_KEY,
            eas: {
                projectId: "91f60ef6-aaf9-47a1-ac1a-f7225a16419a",
            },
        },
    };
};
