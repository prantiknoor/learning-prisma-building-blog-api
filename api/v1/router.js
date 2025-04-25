import express from "express";
import { loginController, signUpController } from "./authController.js";

const router = express.Router();

router.post('/api/v1/signup', signUpController);

router.post('/api/v1/login', loginController);

export default router;