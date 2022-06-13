import express from 'express';
import { createBrandstof, getBrandstof, getBrandstoffen, updateBrandstof } from '../controllers/brandstofvoertuigController.js';
const router = express.Router();

router.route('/:id')
    .get(getBrandstof)
    .put(updateBrandstof);

router.route('/')
    .get(getBrandstoffen)
    .post(createBrandstof);

export default router;