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
                `INSERT INTO PLACES (age, race, gender, emotion, description, imageuri) VALUES(?, ?, ?, ?, ?, ?)`,
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
                            console.log("inside db", result);
                            return new Human(
                                dp.id,
                                dp.age,
                                dp.race,
                                dp.gender,
                                dp.emotion,
                                dp.description,
                                dp.imageUri
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
                "SELECT * FROM places WHERE id = ?",
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
                            dbHuman.description,
                            dbHuman.imageUri
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
