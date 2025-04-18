import express from 'express'
import { HomeController } from '../controllers/form.controller.js';

const router = express.Router()

router.get('/', HomeController)

export default router