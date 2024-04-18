import express from 'express';
import { createUser, getUser, updateUser } from '../controllers/usersController.js'

export const userRouter = express.Router()

userRouter.get('/user', getUser)
userRouter.post('/user', createUser)
userRouter.post('/user/:id', updateUser)



