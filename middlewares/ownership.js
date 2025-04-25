import { checkCommentOwnerShip } from "../lib/comment/index.js";
import { checkPostOwnerShip } from "../lib/post/index.js";
import HttpError from "../utils/httpError.js";

const authorizationError = () => new HttpError(403, "Permission Denied");

const ownership = model => async (req, _res, next) => {
  let isOwner;
  switch (model) {
    case "Post":
      isOwner = await checkPostOwnerShip({
        postId: req.params.id,
        userId: req.user.id
      });
      isOwner ? next() : next(authorizationError());
      break;
    case "Comment":
      isOwner = await checkCommentOwnerShip({
        commentId: req.params.id,
        userId: req.user.id
      });
      isOwner ? next() : next(authorizationError());
      break;
    default:
      next();
      break;
  }
}

export default ownership;