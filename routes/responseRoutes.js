import express from 'express';
import { createResponse, getResponse, getSingleRequirement } from '../controllers/responseController.js';


export const responseRouter = express.Router()

responseRouter.get('/responses', getResponse)
responseRouter.post('/responses', createResponse)
responseRouter.get('/responses/:id', getSingleRequirement)