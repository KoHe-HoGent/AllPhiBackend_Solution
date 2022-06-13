import express from 'express';
import { createVoertuigtype, getVoertuigtype, getVoertuigtypes, updateVoertuigtype } from '../controllers/voertuigtypeController.js';
const router = express.Router();

router.route('/:id')
    .get(getVoertuigtype)
    .put(updateVoertuigtype);

router.route('/')
    .get(getVoertuigtypes)
    .post(createVoertuigtype);

export default router;