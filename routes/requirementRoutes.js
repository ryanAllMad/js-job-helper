import express from 'express';
import { createRequirements, getRequirements, getSingleRequirement, updateRequirement } from '../controllers/requirementsController.js';


export const requirementRouter = express.Router()

requirementRouter.get('/requirements', getRequirements)
requirementRouter.post('/requirements', createRequirements)
requirementRouter.get('/requirements/:id', getSingleRequirement)
requirementRouter.post('/requirements/:id', updateRequirement)