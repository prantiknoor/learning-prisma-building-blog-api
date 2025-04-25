import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

const createPostController = async (req, res) => {
  const newPost = await prisma.post.create({
    data: {
      authorId: req.user.id,
      title: req.body.title,
      content: req.body.content,
      published: req.body.published
    }
  });
  res.status(201).json(newPost);
}

export { createPostController };
