// auth.controller.ts

import { Request, Response } from 'express';
import { authService } from './auth.service';

const signUp = async (req: Request, res: Response) => {
  try {
    const { name, email, password, role, contactNo, address, profileImg } =
      req.body;

    const newUser = await authService.signUp(
      name,
      email,
      password,
      role,
      contactNo,
      address,
      profileImg
    );

    res.status(200).json({
      success: true,
      statusCode: 200,
      message: 'User created successfully!',
      data: newUser,
    });
  } catch (error) {
    res.status(400).json({
      success: false,
      statusCode: 400,
      message: 'Something Went Wrong',
      //error: error.message,
    });
  }
};
const getsignUpUser = async (req: Request, res: Response) => {
  try {
    const result = await authService.getAllSignUpusers();

    res.status(200).json({
      success: true,
      statusCode: 200,
      message: 'SignUp user get successfully!',
      data: result,
    });
  } catch (error) {
    res.status(401).json({
      success: false,
      statusCode: 401,
      message: 'Unauthorized',
      // error: error.message,
    });
  }
};
const signIn = async (req: Request, res: Response) => {
  try {
    const { email, password } = req.body;

    const token = await authService.signIn(email, password);

    res.status(200).json({
      success: true,
      statusCode: 200,
      message: 'User signin successfully!',
      token,
    });
  } catch (error) {
    res.status(401).json({
      success: false,
      statusCode: 401,
      message: 'Unauthorized',
      // error: error.message,
    });
  }
};
// auth.controller.ts

// ...existing code...

export const authController = {
  signUp,
  signIn,
  getsignUpUser,
};
