import { PrismaClient } from "@prisma/client";
import HttpError from "../../utils/httpError.js";

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
    where: { postId: req.params.postId },
    orderBy: { updatedAt: "desc" }
  });
  res.status(200).json(comments);
}

const deleteCommentController = async (req, res) => {
  const selector = { where: { id: +req.params.id || 0 } }
  const comment = await prisma.comment.findUnique(selector);
  if (!comment) throw new HttpError(404, "No comment was found.");

  await prisma.comment.delete(selector);
  res.status(200).json({ status: 200, message: "Comment deleted succeesfully " })
}

export { createCommentController, deleteCommentController, getAllCommentsOfPostController };

