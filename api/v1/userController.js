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

export { getAllUserController };
