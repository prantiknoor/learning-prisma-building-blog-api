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

const getAllCommentsOfPostController = async (req, res) => {
  const comments = await prisma.comment.findMany({
    where: { postId: req.params.postId }
  });
  res.status(200).json(comments);
}

export { createCommentController,  getAllCommentsOfPostController };
