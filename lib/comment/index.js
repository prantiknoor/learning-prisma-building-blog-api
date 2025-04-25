import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

const checkCommentOwnerShip = async ({ commentId, userId }) => {
  const { authorId } = await prisma.comment.findUnique({
    where: { id: +commentId || 0 },
    select: { authorId: true }
  });

  return userId === authorId;
}

export { checkCommentOwnerShip };

