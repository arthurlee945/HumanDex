import * as SQLite from "expo-sqlite";
import Human from "../models/human";

const database = SQLite.openDatabase("humans.db");

export function init() {
    const promise = new Promise((resolve, reject) => {
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
    return promise;
}

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

export function deleteHuman(id) {
    const promise = new Promise((resolve, reject) => {
        database.transaction((tx) => {
            tx.executeSql(
                "DELETE FROM humans WHERE id = ?",
                [id],
                (_, result) => {
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

export function deleteTable() {
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

export const sampleData = {
    age: 29,
    dominant_emotion: "happy",
    dominant_race: "black",
    emotion: {
        angry: 0.0006518918003669004,
        disgust: 2.5957949359763265e-8,
        fear: 0.10484012223823401,
        happy: 87.33261974661114,
        neutral: 12.25683393992973,
        sad: 0.017130901100807505,
        surprise: 0.2879258134826048,
    },
    gender: "Woman",
    race: {
        asian: 18.908613920211792,
        black: 45.77074646949768,
        indian: 14.630670845508575,
        "latino hispanic": 17.24979132413864,
        "middle eastern": 1.4890329912304878,
        white: 1.9511451944708824,
    },
    region: {
        h: 654,
        w: 654,
        x: 160,
        y: 213,
    },
    description:
        "This 26 year old, Asian female is so happy she could burst into a spontaneous dance at any given moment! She radiates positivity and joy, always looking for the next opportunity to squeeze in a good laugh.",
};
