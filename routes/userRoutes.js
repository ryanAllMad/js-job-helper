import express from 'express';
import { createUser, getUser, updateUser, deleteLink, deleteExp } from '../controllers/usersController.js'

export const userRouter = express.Router()

userRouter.get('/user', getUser)
userRouter.post('/user', createUser)
userRouter.post('/user/:id', updateUser)
userRouter.delete('/user/links/:id/:userId', deleteLink)
userRouter.delete('/user/experience/:id/:userId', deleteExp)



