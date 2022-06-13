import express from 'express';
import { createTankkaart, getTankkaart, getTankkaarten, updateTankkaart } from '../controllers/tankkaartController.js';
const router = express.Router();

router.route('/:id')
    .get(getTankkaart)
    .put(updateTankkaart);

router.route('/')
    .get(getTankkaarten)
    .post(createTankkaart);

export default router;