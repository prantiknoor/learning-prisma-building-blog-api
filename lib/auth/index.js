import { PrismaClient } from '@prisma/client'
import { generateToken } from './token.js'
import { createHash, verifyHash } from "./utils.js"

const prisma = new PrismaClient()

const signUp = async ({ name, email, password }) => {
  try {
    const newUser = await prisma.user.create({
      data: {
        name,
        email,
        password: createHash(password)
      }
    });

    const token = generateToken({ payload: newUser });
    return token;
  } catch (error) {
    if (error.code === "P2002") {
      error = new Error("Email already exists");
      error.code = 409;
    } else {
      error.code = 500;
    }
    throw error;
  }
}

const login = async ({ email, password }) => {
  const user = await prisma.user.findUnique({
    where: { email }
  });
  
  if (!user || !verifyHash(password, user.password)) {
    const error = new Error("Invalid email or password");
    error.code = 401;
    throw error;
  }

  const token = generateToken({
    payload: user
  });

  return token;
}

export { login, signUp }
