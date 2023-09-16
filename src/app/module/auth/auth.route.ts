// auth.route.ts

import express from 'express';
import { authController } from './auth.controller';

const router = express.Router();

// User sign-up route
router.post('/signup', authController.signUp);
router.get('/getAllSignUp', authController.getsignUpUser);
//User sign-in route
router.post('/signin', authController.signIn);

export const authRouth = router;
