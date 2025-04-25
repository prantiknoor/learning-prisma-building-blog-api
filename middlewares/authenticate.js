import { verifyToken } from "../lib/auth/token.js";

const authenticate = async (req, _res, next) => {
  const token = req.headers.authorization?.split(' ')?.at(1);
  console.log(token);

  if (!token) {
    const err = new Error("Authentication token is missing");
    err.status = 401;
    throw err;
  }

  const user = verifyToken({ token });
  req.user = user;
  next();
}

export default authenticate;