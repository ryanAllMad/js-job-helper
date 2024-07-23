import express from 'express';
import { createUser, getUser, updateUser, deleteLink, deleteExp, deleteEd, deleteUser } from '../controllers/usersController.js'

export const userRouter = express.Router()

userRouter.get('/user', getUser)
userRouter.post('/user', createUser)
userRouter.post('/user/:id', updateUser)
userRouter.delete('/user/:id', deleteUser)
userRouter.delete('/user/links/:id/:userId', deleteLink)
userRouter.delete('/user/experience/:id/:userId', deleteExp)
userRouter.delete('/user/education/:id/:userId', deleteEd)



