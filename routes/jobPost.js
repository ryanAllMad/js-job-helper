import express from 'express';
import { getJobPost, createJobPost, getSingleJobPost, updateSingleJobPost } from '../controllers/jobPostController.js';


export const jobPostRouter = express.Router()

jobPostRouter.get('/job-post', getJobPost)
jobPostRouter.post('/job-post', createJobPost)
jobPostRouter.get('/job-post/:company_name', getSingleJobPost)
jobPostRouter.post('/job-post/:company_name', updateSingleJobPost)