import { Router } from 'express';
import { getPhones } from '../controllers/phone.controller.js';

const router = Router();

router.get('/phones', getPhones);

export default router;
