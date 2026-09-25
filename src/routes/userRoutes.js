import express from 'express';
import { createUser, deleteUserById, getAllUsers, getUserById, homepageInfo, updateUserById } from '../controllers/userController.js';
import validateUser from '../middlewares/inputValidator.Middleware.js';
const router = express.Router();

router.get('/', homepageInfo)
router.post('/users', validateUser,createUser);
router.get('/users', getAllUsers);
router.get('/users/:id', getUserById);
router.put('/users/:id', validateUser,updateUserById);
router.delete('/users/:id', deleteUserById);

export default router

