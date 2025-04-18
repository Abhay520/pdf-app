import express from 'express'
import { ImageController } from '../controllers/image.controller.js';
import { inputMiddleware } from '../middleware/input.middleware.js';

const router = express.Router()

router.post('/', inputMiddleware, ImageController)

export default router