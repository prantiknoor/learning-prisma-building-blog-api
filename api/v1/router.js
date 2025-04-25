import express from "express";
import { loginController, signUpController } from "./authController.js";
import { getAllUserController } from "./userController.js";

const router = express.Router();

router.post('/api/v1/signup', signUpController);
router.post('/api/v1/login', loginController);

router.get('/api/v1/users', getAllUserController);

export default router;