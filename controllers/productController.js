import Product from "../models/Product.js";

export const addProducts = async (req, res) => {
  try {
    let product = new Product();
    product.username = req.body.username;
    product.password = req.body.password;
    const doc = await product.save();
    console.log(doc);
    return res.json(doc);
  } catch (err) {
    return res.status(400).json({ status: "error", message: `${err}` });
  }
};

export const getProducts = async (req, res) => {
  try {
    const product = await Product.find({});
    return res.status(200).json({ status: "Success", data: product });
  } catch (err) {
    return res.status(400).json({ status: "error", message: `${err}` });
  }
};
