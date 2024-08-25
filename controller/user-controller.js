import User from "../model/user.js";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import dotenv from "dotenv";
import Token from "../model/token.js";

export const signupUser = async (request, response) => {
  try {
    //const salt = await bcrypt.genSalt();
    //const hashedPassword = await bcrypt.hash(request.body.password, salt);
    const hashedPassword = await bcrypt.hash(request.body.password, 10);

    const user = {
      username: request.body.username,
      name: request.body.name,
      password: hashedPassword,
    };
    const newUser = new User(user);
    await newUser.save();
    return response.status(200).json({ msg: "Signup successfull" });
  } catch (error) {
    return response.status(500).json({ msg: "Error while signing up user" });
  }
};

export const loginUser = async (request, response) => {
  let user = await User.findOne({ username: request.body.username });
  if (!user) {
    return response.status(400).json({ msg: "Username does not match" });
  }

  try {
    let match = await bcrypt.compare(request.body.password, user.password);
    let a =
      "c1cfdc1bdfe49354aaf7773cb10e9379ac62ca4134cd888c83a211d0ded1c990e56e3f278e5da603e33b582468aba4cf7274c02ecab7298ca5f12dc185d7dcd7";
    let b =
      "f4aa756eb36246c9bb3dba740bba6b02475a2efd45fc1699bd9f1671002af3fa05d400bf1d135e660fcd8b1b61176a2714efc80ca90999e28c63d525278bc3e8";
    if (match) {
      const accessToken = jwt.sign(user.toJSON(), a, { expiresIn: "15m" });

      const refreshToken = jwt.sign(user.toJSON(), b);

      const newToken = new Token({ token: refreshToken });
      await newToken.save();

      response.status(200).json({
        accessToken: accessToken,
        refreshToken: refreshToken,
        name: user.name,
        username: user.username,
      });
    } else {
      response.status(400).json({ msg: "Password does not match" });
    }
  } catch (error) {
    console.log("error login");
    response.status(500).json({ msg: "error while login the user" });
  }
};
