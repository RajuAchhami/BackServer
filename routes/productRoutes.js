import express from "express";
import { addProducts, getProducts } from "../controllers/productController.js";

const router = express.Router();

const handleAll = (req, res) => {
  return res
    .status(405)
    .json({ status: "error", message: "method not allowed" });
};
router.route("/products").get(getProducts).post(addProducts).all(handleAll);

export default router;
