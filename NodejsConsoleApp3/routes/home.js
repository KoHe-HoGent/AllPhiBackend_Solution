//express
import express from 'express';
const router = express.Router();

//database
import config from '../database/config/config.js';


import mysql from 'mysql2';
import { Sequelize, QueryTypes, DataTypes } from 'sequelize';

router
    .route('/')
    .get(async (req, res) => {
        const connection = mysql.createConnection(config);
        connection.query(`SELECT * FROM rijbewijzen`,
            (err, results, fields) => {
                if (err) {
                    console.log(err);
                    res.status(404).send(err);
                }
                res.status(200).send(results);
            }
        )
        //const sequelize = new Sequelize(config);
        //const [results, metadata] = await sequelize.query(`SELECT * from rijbewijzen;`);
        ////const results = await rijbewijs.findAll();
        ////res.status(200).send(rijbewijzen.toString());
        res.status(200).send(results);

    });

export default router;