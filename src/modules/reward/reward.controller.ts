import Reward from "./reward.model";
import { Response, Request } from "express";
require("dotenv").config();

export const testing = async (req: any, res: any) => {
  res.send("This is testing response. ");
};

export const getRewardList = async (req: Request, res: Response) => {
  //   console.log("getrewardList");
  await Reward.find({})
    .then((response: any) => {
      res.status(200).json({ reward: response });
    })
    .catch((err: any) => {
      res.status(500).json({ message: "Something went wrong." });
    });
};

export const addReward = async (req: Request, res: Response) => {
  //   console.log("addReward", req.body);
  await Reward.create(req.body)
    .then((response: any) => {
      res.status(201).json({ reward: response });
    })
    .catch((err: any) => {
      res.status(500).json({ message: "Something went wrong." });
    });
};

module.exports = { getRewardList, addReward, testing };
