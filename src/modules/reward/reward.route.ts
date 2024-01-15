import express from "express";
import { addReward, getRewardList, testing } from "./reward.controller";
const router = express.Router();

router.post("/addReward", addReward);
router.get("/getRewardList", getRewardList);
router.get("/testing", testing);

export default router;
