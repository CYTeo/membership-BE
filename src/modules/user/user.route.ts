import express from "express";
import { signup, signin, getUserByEmail, testing } from "./user.controller";
const router = express.Router();

router.post("/signup", signup);
router.get("/testing", testing);

// router.post("/signin", signin);
// router.post("/getUserByEmail", getUserByEmail);

export default router;
