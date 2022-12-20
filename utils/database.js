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

export function insertHuman(human) {
    const promise = new Promise((resolve, reject) => {
        database.transaction((tx) => {
            tx.executeSql(
                `INSERT INTO PLACES (age, race, gender, emotion, description, imageuri) VALUES(?, ?, ?, ?, ?, ?)`,
                [human.age, human.race, human.gender, human.emotion, human.description, human.imageUri]
            );
        });
    });
}
