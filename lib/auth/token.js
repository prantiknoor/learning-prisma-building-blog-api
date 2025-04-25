import jwt from "jsonwebtoken";

const generateToken = ({
  payload,
  algorithm = "HS256",
  secret = process.env.ACCESS_TOKEN_SECRET,
  expiresIn = "1d"
}) => {
  return jwt.sign(payload, secret, { algorithm, expiresIn })
}

const verifyToken = ({
  token,
  algorithm = "HS256",
  secret = process.env.ACCESS_TOKEN_SECRET
}) => {
  try {
    return jwt.verify(token, secret, { algorithms: [algorithm] })
  } catch (error) {
    error.status = 401;
    if (error.name === 'TokenExpiredError') {
      error.message = "Your session has expired. Please log in again."
    } else {
      error.message = "Token is invalid or malformed";
    }
    throw error;
  }
}

export { generateToken, verifyToken };
