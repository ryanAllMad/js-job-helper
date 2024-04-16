import express from 'express';
import { createRequirements, getRequirements } from '../controllers/requirementsController.js';


export const requirementRouter = express.Router()

requirementRouter.get('/requirements', getRequirements)
requirementRouter.post('/requirements', createRequirements)
