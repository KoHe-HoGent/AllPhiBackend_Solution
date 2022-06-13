import express from 'express';
import { createRijbewijs, getRijbewijs, getRijbewijzen, updateRijbewijs } from '../controllers/rijbewijsController.js';
import { getRijbewijstypeViaRijbewijs } from '../controllers/rijbewijstypeController.js';
const router = express.Router();

//met rijbewijs id, geef alle rijbewijstypes gelinkt aan dit rijbewijs
router.route('/categories/:id')
    .get(getRijbewijstypeViaRijbewijs);

//select/update via id
router.route('/:id')
    .get(getRijbewijs)
    .put(updateRijbewijs);

//select * en update
router.route('/')
    .get(getRijbewijzen)
    .post(createRijbewijs);

export default router;