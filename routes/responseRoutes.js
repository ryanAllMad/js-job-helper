import express from 'express';
import { createResponse, getResponse, getSingleResponseAndRequirement, updateResponse } from '../controllers/responseController.js';


export const responseRouter = express.Router()

responseRouter.get('/responses', getResponse)
responseRouter.post('/responses', createResponse)
responseRouter.get('/responses/:id', getSingleResponseAndRequirement)
responseRouter.post('/responses/:id', updateResponse)