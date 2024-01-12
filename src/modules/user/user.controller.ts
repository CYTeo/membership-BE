import User from "./user.model";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
require("dotenv").config();

const SECRET_KEY = "CREDENTIALS_KEY";

type UserDetails = {
  username: String;
  email: String;
  password: String;
};

export const testing = async (req: any, res: any) => {
  res.send("This is testing response. ");
};

export const signup = async (req: any, res: any) => {
  const { username, email, password } = req.body;
  console.log("req.body in signup", req.body);

  // const SECRET_KEY = 'CREDENTIALS_KEY';

  try {
    // check if the user existing in the system
    const existingUser = await User.findOne({ email: email });
    if (existingUser) {
      return res.status(400).json({ message: "User already exists" });
    }

    // hash the password
    const hashedPassword = await bcrypt.hash(password, 10);

    // create the user
    const result = await User.create({
      username: username,
      email: email,
      password: hashedPassword,
    });

    // generate the token
    // const token = jwt.sign({ email: result.email, id: result._id }, SECRET_KEY);

    // const token = jwt.sign(
    //   { email: result.email, id: result._id },
    //   process.env.JWT_SECRET,
    //   {
    //     expiresIn: process.env.JWT_EXPIRES_IN,
    //   }
    // );

    // res.status(201).json({ user: result, token: token });

    // res.send("Sign up");
  } catch (error) {
    res.status(500).json({ message: "Something went wrong." });
    // res.send("error.message");
  }
};

export const signin = async (req: any, res: any) => {
  const { username, email, password } = req.body;

  try {
    // check if the user existed in the system
    const userFound = await User.findOne({ email: email });
    if (!userFound) {
      return res.status(200).json({ message: "User not found" });
    }

    // match the password between input and system
    const matchPassword = await bcrypt.compare(password, userFound.password);

    // password not matched and return invalid message
    if (!matchPassword) {
      return res.status(200).json({ message: "Invalid Credentials" });
    }

    // create token
    // const token = jwt.sign(
    //   { email: userFound.email, id: userFound._id },
    //   SECRET_KEY
    // );
    // res.status(201).json({ user: userFound, token: token });

    // res.send("Sign in");
  } catch (errer) {
    res.status(500).json({ message: "Something went wrong." });
  }
};

export const getUserByEmail = async (req: any, res: any) => {
  const { email, token } = req.body;
  // console.log('req.body', req.body);
  try {
    // check if the user existed in the system
    const userFound = await User.findOne({ email: email }).select({
      password: 0,
      _id: 0,
      __v: 0,
    });
    if (!userFound) {
      return res.status(403).json({ message: "User not found" });
    }
    jwt.verify(token, SECRET_KEY, (err: any, decoded: any) => {
      if (err) {
        console.error("Token verification failed:", err.message);
        res.status(403).json({ message: "User not found" });
      }
    });
    res.status(200).json({ user: userFound });
  } catch (error) {
    res.status(500).json({ message: "Something went wrong." });
  }
};

module.exports = {
  testing,
  signup,
  signin,
  getUserByEmail,
};
