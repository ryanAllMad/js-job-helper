import express from 'express';
import { createExperience, getExperience, getSingleExperience, updateExperience } from '../controllers/experienceController.js';

export const experienceRouter = express.Router()

experienceRouter.get('/experience', getExperience)
experienceRouter.post('/experience', createExperience)
experienceRouter.get('/experience/:id', getSingleExperience)
experienceRouter.post('/experience/:id', updateExperience)