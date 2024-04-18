import express from 'express';
import { createLinks, getLinks, getSingleLinks, updateLink } from '../controllers/linksController.js';

export const linksRouter = express.Router()

linksRouter.get('/links', getLinks)
linksRouter.post('/links', createLinks)
linksRouter.get('/links/:id', getSingleLinks)
linksRouter.post('/links/:id', updateLink)
