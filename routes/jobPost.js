import express from 'express';
import { getJobPost, createJobPost, getSingleJobPostAndRequirements, updateJobPost } from '../controllers/jobPostController.js';


export const jobPostRouter = express.Router()

jobPostRouter.get('/job-post', getJobPost)
jobPostRouter.post('/job-post', createJobPost)
jobPostRouter.get('/job-post/:id', getSingleJobPostAndRequirements)
jobPostRouter.post('/job-post/:id', updateJobPost)