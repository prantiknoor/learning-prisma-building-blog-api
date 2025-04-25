import express from "express";
import authenticate from "../../middlewares/authenticate.js";
import { loginController, signUpController } from "./authController.js";
import { createPostController, getAllPostController, getPostWithCommentsController, updatePostController } from "./postController.js";
import { getAllUserController, getUserWithPostsAndComments } from "./userController.js";

const router = express.Router();

router.post('/api/v1/signup', signUpController);
router.post('/api/v1/login', loginController);

router.get('/api/v1/users', getAllUserController);
router.get('/api/v1/users/:id', getUserWithPostsAndComments);

router.route('/api/v1/posts')
  .get(getAllPostController)
  .post(
    authenticate,
    createPostController
  );
router.route('/api/v1/posts/:id')
  .get(
    authenticate,
    getPostWithCommentsController
  ).patch(
    authenticate,
    updatePostController
  )

export default router;