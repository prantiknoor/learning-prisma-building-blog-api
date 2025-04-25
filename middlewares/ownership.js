import { checkPostOwnerShip } from "../lib/post/index.js";

const authorizationError = () => {
  const err = new Error("Permission Denied")
  err.status = 403;
  return err;
}

const ownership = model => async (req, _res, next) => {
  switch (model) {
    case "Post":
      const isOwner = await checkPostOwnerShip({
        postId: req.params.id,
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