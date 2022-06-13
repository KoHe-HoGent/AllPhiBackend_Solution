import mysql from "mysql2";
import config from '../database/config/config.js';

//controleer dat id een positieve integer is
const _valideerId = (id) => {
    if (Number.isInteger(parseInt(id)) && id >= 0) return true;
    else return false;
}

export const getVoertuigen = (req, res) => {
    const _connection = mysql.createConnection(config);
    _connection.query("SELECT * FROM voertuigen", (err, results, fields) => {
        if (err) res.status(500).send({});
        res.status(200).send(results);
    })
}

export const getVoertuig = (req, res) => {
    if (!_valideerId(req.params.id))
        res.status(400).send("id moet een positieve integer zijn");

    const _connection = mysql.createConnection(config);
    _connection.query(`SELECT * FROM voertuigen WHERE voeId = ${req.params.id}`, (err, results, fields) => {
        if (err) res.status(500).send("er is iets misgelopen");
        if (results == "") res.status(400).send(`database vond geen resultaat met id ${req.params.id}`);
        res.status(200).send(results);
    })
};

export const createVoertuig = (req, res) => {
    const _connection = mysql.createConnection(config);
    _connection.query(`INSERT INTO voertuigen
                        (voeMerk,
                        voeModel,
                        voeChasisnummer,
                        voeNummerplaat,
                        voeBrandstoftype,
                        voeVoertuigtype,
                        voeKleur,
                        voeAantalDeuren)
                    VALUES
                        (${req.body.voeMerk},
                        ${req.body.voeModel},
                        ${req.body.voeChasisnummer},
                        ${req.body.voeNummerplaat},
                        ${req.body.voeBrandstoftype},
                        ${req.body.voeVoertuigtype},
                        ${req.body.voeKleur},
                        ${req.body.voeAantalDeuren});`,
                    (err, results, fields) => {
                        if (err) res.status(500).send("er is iets misgelopen");
                        res.status(201).send(results);
                    })
};

export const updateVoertuig = (req, res) => {
    if (!_valideerId(req.params.id))
        res.status(400).send("id moet een positieve integer zijn");

    const _connection = mysql.createConnection(config);
    _connection.query(`UPDATE
                        voertuigen
                    SET
                        voeMerk = ${req.body.voeMerk},
                        voeModel = ${req.body.voeModel},
                        voeChasisnummer = ${req.body.voeChasisnummer},
                        voeNummerplaat = ${req.body.voeNummerplaat},
                        voeBrandstoftype = ${req.body.voeBrandstoftype},
                        voeVoertuigtype = ${req.body.voeVoertuigtype},
                        voeKleur = ${req.body.voeKleur},
                        voeAantalDeuren = ${req.body.voeAantalDeuren}
                    WHERE
                        voeId = ${req.params.id};`,
                    (err, results, fields) => {
                        if (err) res.status(500).send("er is iets misgelopen");
                        res.status(200).send(results);
                    })
};