import * as SQLite from "expo-sqlite";
import Constants from "expo-constants";
import { deleteAsync } from "expo-file-system";

import Human from "../models/human";

const database = SQLite.openDatabase("humans.db");

//initial API KEY Probably won't work when this is live
const { OPENAI_API_KEY } = Constants.expoConfig.extra;
//initializer
export function initTables() {
    const humanPromise = new Promise((resolve, reject) => {
        database.transaction((tx) => {
            tx.executeSql(
                `CREATE TABLE IF NOT EXISTS humans (
                    id INTEGER PRIMARY KEY NOT NULL,
                    age INTEGER NOT NULL,
                    race TEXT NOT NULL,
                    gender TEXT NOT NULL,
                    emotion TEXT NOT NULL,
                    description TEXT NOT NULL,
                    imageUri TEXT NOT NULL
                )`,
                [],
                () => {
                    resolve();
                },
                (_, err) => {
                    reject(err);
                }
            );
        });
    });
    const OpenAiPromise = new Promise((resolve, reject) => {
        database.transaction((tx) => {
            tx.executeSql(
                `CREATE TABLE IF NOT EXISTS openai (
                    id INTEGER PRIMARY KEY NOT NULL,
                    apiKey TEXT NOT NULL
                )`,
                [],
                async (_, result) => {
                    const getInitialKey = await retrieveOpenAiKey();
                    if (!getInitialKey) {
                        await addOpenAiKey(OPENAI_API_KEY);
                    }
                    resolve();
                },
                (_, err) => {
                    reject(err);
                }
            );
        });
    });
    return Promise.all([humanPromise, OpenAiPromise]);
}

//human table configs
export function addHuman(human) {
    const promise = new Promise((resolve, reject) => {
        database.transaction((tx) => {
            tx.executeSql(
                `INSERT INTO humans (age, race, gender, emotion, description, imageuri) VALUES(?, ?, ?, ?, ?, ?)`,
                [human.age, human.race, human.gender, human.emotion, human.description, human.imageUri],
                (_, result) => {
                    resolve(result);
                },
                (_, error) => {
                    reject(error);
                }
            );
        });
    });
    return promise;
}

export function fetchHumans() {
    const promise = new Promise((resolve, reject) => {
        database.transaction((tx) => {
            tx.executeSql(
                "SELECT * FROM humans",
                [],
                (_, result) => {
                    resolve(
                        result.rows._array.map((dp) => {
                            return new Human(
                                dp.id,
                                dp.age,
                                dp.race,
                                dp.gender,
                                dp.emotion,
                                dp.imageUri,
                                dp.description
                            );
                        })
                    );
                },
                (_, error) => {
                    reject(error);
                }
            );
        });
    });
    return promise;
}

export function fetchHumanDetail(id) {
    const promise = new Promise((resolve, reject) => {
        database.transaction((tx) => {
            tx.executeSql(
                "SELECT * FROM humans WHERE id = ?",
                [id],
                (_, result) => {
                    const dbHuman = result.rows._array[0];
                    resolve(
                        new Human(
                            dbHuman.id,
                            dbHuman.age,
                            dbHuman.race,
                            dbHuman.gender,
                            dbHuman.emotion,
                            dbHuman.imageUri,
                            dbHuman.description
                        )
                    );
                },
                (_, error) => {
                    reject(error);
                }
            );
        });
    });
    return promise;
}

export function deleteHuman(id, imageUri) {
    const promise = new Promise((resolve, reject) => {
        database.transaction((tx) => {
            tx.executeSql(
                "DELETE FROM humans WHERE id = ?",
                [id],
                async (_, result) => {
                    await deleteAsync(imageUri);
                    resolve("Entry Deleted");
                },
                (_, error) => {
                    reject(error);
                }
            );
        });
    });
    return promise;
}

export function deleteHumanTable() {
    const promise = new Promise((resolve, reject) => {
        database.transaction((tx) => {
            tx.executeSql(
                "DROP TABLE IF EXISTS humans",
                [],
                (_, result) => {
                    resolve(result);
                },
                (_, err) => {
                    reject(err);
                }
            );
        });
    });
    return promise;
}

//openai table configs
export function deleteOpenAiKey() {
    const promise = new Promise((resolve, reject) => {
        database.transaction((tx) => {
            tx.executeSql(
                "DELETE FROM openai",
                [],
                (_, result) => {
                    resolve();
                },
                (_, error) => {
                    reject(error);
                }
            );
        });
    });
    return promise;
}

export function addOpenAiKey(key) {
    const promise = new Promise((resolve, reject) => {
        database.transaction((tx) => {
            tx.executeSql(
                "INSERT INTO openai (apiKey) VALUES (?)",
                [key],
                (_, result) => {
                    resolve();
                },
                (_, error) => {
                    reject(error);
                }
            );
        });
    });
    return promise;
}

export async function updateOpenAiKey(key) {
    await deleteOpenAiKey();
    return addOpenAiKey(key);
}

export function retrieveOpenAiKey() {
    const promise = new Promise((resolve, reject) => {
        database.transaction((tx) => {
            tx.executeSql(
                "SELECT * FROM openai LIMIT ?",
                [1],
                (_, result) => {
                    resolve(result.rows._array[0]);
                },
                (_, error) => {
                    reject(error);
                }
            );
        });
    });
    return promise;
}

export function deleteOpenAiTable() {
    const promise = new Promise((resolve, reject) => {
        database.transaction((tx) => {
            tx.executeSql(
                "DROP TABLE IF EXISTS openai",
                [],
                (_, result) => {
                    resolve(result);
                },
                (_, err) => {
                    reject(err);
                }
            );
        });
    });
    return promise;
}
