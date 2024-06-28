import mongoose from "mongoose";

const productSchema = new mongoose.Schema({
  username: String,
  password: String,
});

const Product = mongoose.model("Product", productSchema);

export default Product;
