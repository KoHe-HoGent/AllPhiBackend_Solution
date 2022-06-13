import express from 'express';
import { createRijbewijstype, getRijbewijstype, getRijbewijstypes, updateRijbewijstype } from '../controllers/rijbewijstypeController.js';
const router = express.Router();



//via rijbewijstype id, get of update data
router.route('/:id')
    .get(getRijbewijstype)
    .put(updateRijbewijstype);

//alle rijbewijzen ophalen, nieuw rijbewijs aanmaken
router.route('/')
    .get(getRijbewijstypes)
    .post(createRijbewijstype);

export default router;