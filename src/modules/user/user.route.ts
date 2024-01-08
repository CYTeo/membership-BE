import express from "express";
import { signup, signin, getUserByEmail } from "./user.controller";
const router = express.Router();

router.post("/signup", signup);
router.post("/signin", signin);
router.post("/getUserByEmail", getUserByEmail);

export default router;
