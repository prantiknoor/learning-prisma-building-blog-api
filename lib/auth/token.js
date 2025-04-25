import jwt from "jsonwebtoken";

const generateToken = ({
  payload,
  algorithm = "HS256",
  secret = process.env.ACCESS_TOKEN_SECRET,
  expiresIn = "1d"
}) => {
  return jwt.sign(payload, secret, { algorithm, expiresIn })
}

export { generateToken };
