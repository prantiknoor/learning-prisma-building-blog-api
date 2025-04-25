import { PrismaClient } from '@prisma/client';
import HttpError from '../../utils/httpError.js';

const prisma = new PrismaClient();

const getAllUserController = async (_req, res) => {
  const users = await prisma.user.findMany({
    select: {
      id: true,
      name: true,
      email: true,
    }
  });
  res.status(200).json(users);
}

const getUserWithPostsAndComments = async (req, res) => {
  const user = await prisma.user.findUnique({
    where: {
      id: req.params.id
    },
    select: {
      id: true,
      name: true,
      email: true,
      posts: true,
      comments: true
    }
  });
  if (!user) throw new HttpError(404, "No user was found");

  res.status(200).json(user);
}

export { getAllUserController, getUserWithPostsAndComments };
