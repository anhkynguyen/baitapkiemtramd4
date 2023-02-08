import { laptopRouter } from './laptopRouter';
import { Router } from "express";
export const router = Router()
router.use('/laptops',laptopRouter)