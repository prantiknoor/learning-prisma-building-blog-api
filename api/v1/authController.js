import { login, signUp } from "../../lib/auth/index.js";

const signUpController = async (req, res) => {
  const token = await signUp(req.body);

  const response = {
    status: 201,
    message: 'Sign up successful',
    data: {
      access_token: token
    }
  }

  res.status(201).json(response);
}

const loginController = async (req, res, _next) => {
  const token = await login(req.body);

  const response = {
    status: 200,
    message: "Login successful",
    data: {
      access_token: token
    }
  }

  res.status(200).json(response);
}

export { loginController, signUpController };

