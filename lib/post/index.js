import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

const checkPostOwnerShip = async ({ postId, userId }) => {
  const { authorId } = await prisma.post.findUnique({
    where: { id: postId },
    select: { authorId: true }
  });

  return userId === authorId;
}

export { checkPostOwnerShip };

