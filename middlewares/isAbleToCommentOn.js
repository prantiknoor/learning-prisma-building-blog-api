import { PrismaClient } from "@prisma/client";
import HttpError from "../utils/httpError.js";

const prisma = new PrismaClient();

const isAbleToCommentOn = async (req, _res, next) => {
  const post = await prisma.post.findUnique({
    where: { id: req.params.postId },
    select: { published: true }
  });

  if (!post) {
    throw new HttpError(404, "No post was found");
  } else if (!post.published) {
    throw new HttpError(403, "The post is not published yet");
  } else {
    next();
  }
}

export default isAbleToCommentOn;