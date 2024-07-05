import express from 'express';
import { createResume, getResumes, updateResume, getOneResume } from '../controllers/resumeController.js'

export const resumeRouter = express.Router()

resumeRouter.get('/resume', getResumes)
resumeRouter.post('/resume', createResume)
resumeRouter.post('/resume/:id', updateResume)
resumeRouter.get('/resume/:id', getOneResume)