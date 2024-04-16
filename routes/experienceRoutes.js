import express from 'express';
import { createExperience, getExperience } from '../controllers/experienceController.js';

export const experienceRouter = express.Router()

experienceRouter.get('/experience', getExperience)
experienceRouter.post('/experience', createExperience)