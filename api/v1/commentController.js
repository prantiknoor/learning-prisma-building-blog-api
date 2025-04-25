import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

const createCommentController = async (req, res) => {
  const comment = await prisma.comment.create({
    data: {
      authorId: req.user.id,
      postId: req.params.postId,
      text: req.body.text
    }
  });
  res.status(201).json(comment);
}

export { createCommentController };
