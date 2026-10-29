import express from 'express';
import { createUser, deleteUserById, getAllUsers, getUserById, homepageInfo, updateUserById } from '../controllers/userController.js';
import {validateUser,validatePagination,validatePath} from '../middlewares/inputValidator.Middleware.js';
const router = express.Router();

router.get('/', homepageInfo)
router.post('/users', validateUser,createUser);
router.get('/users',validatePagination, getAllUsers);
router.get('/users/:id', validatePath,getUserById);
router.put('/users/:id', validatePath,validateUser,updateUserById);
router.delete('/users/:id', validatePath,deleteUserById);

export default router

