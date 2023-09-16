import { PrismaClient } from '@prisma/client';
import bcrypt from 'bcrypt';
import jwt, { Secret } from 'jsonwebtoken';
import config from '../../../config';

const prisma = new PrismaClient();

const signUp = async (
  name: string,
  email: string,
  password: string,
  role: string,
  contactNo: string,
  address: string,
  profileImg: string
) => {
  // Check if the email is already registered
  const existingUser = await prisma.user.findUnique({
    where: { email },
  });

  if (existingUser) {
    throw new Error('Email already exists.');
  }

  // Hash the password before storing it in the database
  const hashedPassword = await bcrypt.hash(password, 10);

  // Create the new user
  const newUser = await prisma.user.create({
    data: {
      name,
      email,
      password: hashedPassword,
      role,
      contactNo,
      address,
      profileImg,
    },
  });

  return newUser;
};
const getAllSignUpusers = async () => {
  const result = await prisma.user.findMany();

  return {
    data: result,
  };
};
const signIn = async (email: string, password: string) => {
  // Check if the user with the given email exists
  const user = await prisma.user.findUnique({
    where: { email },
  });

  if (!user) {
    throw new Error('Invalid email or password.');
  }

  // Compare the provided password with the hashed password in the database
  const passwordMatch = await bcrypt.compare(password, user.password);

  if (!passwordMatch) {
    throw new Error('Invalid email or password.');
  }

  // Generate a JWT token for the authenticated user
  const token = jwt.sign(
    { userId: user.id, role: user.role },
    config.jwt.secret as Secret, // Replace with your secret key
    { expiresIn: '1y' } // Set the expiration time as needed
  );

  return token;
};
// auth.service.ts

// ...existing code...

export const authService = {
  signUp,
  signIn,
  getAllSignUpusers,
};
