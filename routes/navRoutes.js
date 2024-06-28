import express from "express";
import { getNav } from "../controllers/navControllers.js";

const router = express.Router();

const handleAll = (req, res) => {
  return res
    .status(405)
    .json({ status: "error", message: "method not allowed" });
};
router.route("/navs").get(getNav).all(handleAll);

export default router;
