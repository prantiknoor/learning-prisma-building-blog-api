import { PrismaClient } from '@prisma/client'
import { createHash } from "./utils.js"

const prisma = new PrismaClient()

const signUp = async ({ name, email, password }) => {
  try {
    const newUser = await prisma.user.create({
      data: {
        name,
        email,
        password: createHash(password)
      }
    })
    return newUser;
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

export { signUp }
