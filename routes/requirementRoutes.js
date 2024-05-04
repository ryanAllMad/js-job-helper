import express from 'express';
import { createRequirements, getRequirements, getRequirementsByTitles, getSingleRequirement, updateRequirements } from '../controllers/requirementsController.js';


export const requirementsRouter = express.Router()

requirementsRouter.post('/requirements', createRequirements)
requirementsRouter.get('/requirements', getRequirements)
requirementsRouter.get('/requirements/titles', getRequirementsByTitles)
requirementsRouter.get('/requirements/:id', getSingleRequirement)
requirementsRouter.post('/requirements/:id', updateRequirements)