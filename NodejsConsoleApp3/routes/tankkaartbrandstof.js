import express from 'express';
import { createTankkaartbrandstof, getTankkaartbrandstof, getTankkaartbrandstoffen, updateTankkaartbrandstof } from '../controllers/tankkaartbrandstofController.js';
const router = express.Router();

router.route('/:id')
    .get(getTankkaartbrandstof)
    .put(updateTankkaartbrandstof);

router.route('/')
    .get(getTankkaartbrandstoffen)
    .post(createTankkaartbrandstof);

export default router;