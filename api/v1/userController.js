import { PrismaClient } from '@prisma/client';

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
  res.status(200).json(user);
}

export { getAllUserController, getUserWithPostsAndComments };
