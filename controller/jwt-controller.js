import jwt from "jsonwebtoken";
import dotenv from "dotenv";

import Token from "../model/token.js";
dotenv.config();

export const authenticateToken = (request, response, next) => {
  const authHeader = request.headers["authorization"];
  const token = authHeader && authHeader.split(" ")[1];

  if (token == null) {
    return response.status(401).json({ msg: "token is missing" });
  }

  let a =
    "c1cfdc1bdfe49354aaf7773cb10e9379ac62ca4134cd888c83a211d0ded1c990e56e3f278e5da603e33b582468aba4cf7274c02ecab7298ca5f12dc185d7dcd7";
  jwt.verify(token, a, (error, user) => {
    if (error) {
      console.log(token);
      console.log(a);
      return response.status(403).json({ msg: "invalid token" });
    }

    request.user = user;
    next();
  });
};
