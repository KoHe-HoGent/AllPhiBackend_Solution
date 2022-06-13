import express from 'express';
import { createRijbewijstyperijbewijs, getRijbewijstyperijbewijs, getRijbewijstyperijbewijzen, updateRijbewijstyperijbewijs, deleteRijbewijstyperijbewijs } from '../controllers/rijbewijstyperijbewijsController.js';
const router = express.Router();

router.route('/:id')
    .get(getRijbewijstyperijbewijs)
    .put(updateRijbewijstyperijbewijs)
    .delete(deleteRijbewijstyperijbewijs);

router.route('/')
    .get(getRijbewijstyperijbewijzen)
    .post(createRijbewijstyperijbewijs);

export default router;