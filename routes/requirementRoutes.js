import express from 'express';
import { createRequirements, getRequirements, getRequirementsByTitles, getSingleRequirement, updateRequirements, deleteResponse } from '../controllers/requirementsController.js';


export const requirementsRouter = express.Router()

requirementsRouter.post('/requirements', createRequirements)
requirementsRouter.get('/requirements', getRequirements)
requirementsRouter.get('/requirements/titles', getRequirementsByTitles)
requirementsRouter.get('/requirements/:req_title', getSingleRequirement)
requirementsRouter.post('/requirements/:id', updateRequirements)
requirementsRouter.delete('/requirements/:id', deleteResponse)