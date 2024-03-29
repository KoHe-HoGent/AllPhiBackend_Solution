import mysql from "mysql2";
import config from '../database/config/config.js';

//controleer dat id een positieve integer is
const _valideerId = (id) => {
    if (Number.isInteger(parseInt(id)) && id >= 0) return true;
    else return false;
}

export const getRijbewijstyperijbewijzen = (req, res) => {
    const _connection = mysql.createConnection(config);
    _connection.query("SELECT * FROM rijbewijstyperijbewijzen", (err, results, fields) => {
        if (err) res.status(500).send({});
        res.status(200).send(results);
    })
}

export const getRijbewijstyperijbewijs = (req, res) => {
    //controleer id
    if (!_valideerId(req.params.id))
        res.status(400).send("id moet een positieve integer zijn");

    //connectie
    const _connection = mysql.createConnection(config);
    _connection.query(`SELECT * FROM rijbewijstyperijbewijzen WHERE rtrId = ${req.params.id}`, (err, results, fields) => {
        if (err) res.status(500).send("er is iets misgelopen");
        if (results == "") res.status(400).send(`database vond geen resultaat met id ${req.params.id}`);
        res.status(200).send(results);
    })
};

export const createRijbewijstyperijbewijs = (req, res) => {
    //insert query
    const _connection = mysql.createConnection(config);
    _connection.query(`INSERT INTO rijbewijstyperijbewijzen (rtrRijbewijsId, rtrRijbewijsType)
                    VALUES (${req.body.rtrRijbewijsId}, ${req.body.rtrRijbewijsType});`,
                    (err, results, fields) => {
                        if (err) res.status(500).send("er is iets misgelopen");
                        res.status(201).send(results);
                    })
};

export const updateRijbewijstyperijbewijs = (req, res) => {
    //valideer id
    if (!_valideerId(req.params.id))
        res.status(400).send("id moet een positieve integer zijn");

    //query
    const _connection = mysql.createConnection(config);
    _connection.query(`UPDATE
                        rijbewijstyperijbewijzen
                    SET
                        rtrRijbewijsId = ${req.body.rtrRijbewijsId},
                        rtrRijbewijsType = ${req.body.rtrRijbewijsType}
                    WHERE
                        rtrId = ${req.params.id};`,
                    (err, results, fields) => {
                        if (err) res.status(500).send("er is iets misgelopen");
                        res.status(200).send(results);
                    })
};

export const deleteRijbewijstyperijbewijs = (req, res) => {
    //valideer id
    if (!_valideerId(req.params.id))
        res.status(400).send("id moet een positieve integer zijn");

    //insert query
    const _connection = mysql.createConnection(config);
    _connection.query(`DELETE FROM rijbewijstyperijbewijzen WHERE rtrId=${req.params.id};`,
        (err, results, fields) => {
            if (err) res.status(500).send("er is iets misgelopen");
            res.status(201).send(results);
        })
};