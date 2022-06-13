import express from 'express';
import { createVoertuig, getVoertuig, getVoertuigen, updateVoertuig } from '../controllers/voertuigController.js';
const router = express.Router();

router.route('/:id')
    .get(getVoertuig)
    .put(updateVoertuig);

router.route('/')
    .get(getVoertuigen)
    .post(createVoertuig);

export default router;