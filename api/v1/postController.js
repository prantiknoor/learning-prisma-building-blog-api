import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

const createPostController = async (req, res) => {
  const newPost = await prisma.post.create({
    data: {
      authorId: req.user.id,
      title: req.body.title,
      content: req.body.content,
      published: req.body.published
    },
    include: {
      author: true
    }
  });
  res.status(201).json(newPost);
}

const updatePostController = async (req, res) => {
  const updatedPost = await prisma.post.update({
    where: {
      id: req.params.id
    },
    data: {
      title: req.body.title,
      content: req.body.content,
      published: req.body.published
    },
    include: {
      author: true
    }
  });
  res.status(200).json(updatedPost);
}

const getPostWithCommentsController = async (req, res) => {
  const post = await prisma.post.findUnique({
    where: {
      id: req.params.id
    },
    include: {
      author: true,
      comments: true
    }
  });
  res.status(200).json(post);
}

const getAllPostController = async (req, res) => {
  console.log(req.query.published);

  let published = req.query.published === 'true'
  if (!published) published = undefined;

  const posts = await prisma.post.findMany({
    where: {
      authorId: req.query.authorId,
      published,
    },
    orderBy: { updatedAt: "desc" },

  });
  res.status(200).json(posts);
}

export {
  createPostController,
  getAllPostController,
  getPostWithCommentsController,
  updatePostController
};

