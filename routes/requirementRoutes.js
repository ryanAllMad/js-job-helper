import express from 'express';
import { createRequirements, getRequirements, getRequirementsByTitles, getSingleRequirementById, updateRequirements, deleteResponse } from '../controllers/requirementsController.js';


export const requirementsRouter = express.Router()

requirementsRouter.post('/requirements', createRequirements)
requirementsRouter.get('/requirements', getRequirements)
requirementsRouter.get('/requirements/titles', getRequirementsByTitles)
requirementsRouter.get('/requirements/:id', getSingleRequirementById)
requirementsRouter.post('/requirements/:id', updateRequirements)
requirementsRouter.delete('/requirements/:id', deleteResponse)