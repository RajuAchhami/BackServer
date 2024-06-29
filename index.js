import express from "express";
import productRoutes from "./routes/productRoutes.js";
import navRoutes from "./routes/navRoutes.js";
import cors from "cors";
import bodyParser from "body-parser";
import mongoose from "mongoose";

const port = 5000;
const app = express();

mongoose
  .connect(
    "mongodb+srv://rajachhami55:Raju12345@cluster0.s3emclp.mongodb.net/demo"
  )
  .then((val) => {
    app.listen(port, () => {
      console.log("Server Started");
    });
  })
  .catch((err) => {
    console.log(err);
  });

app.use(cors());
app.use(bodyParser.json());

app.get("/", (req, res) => {
  return res.status(200).json({
    msg: "welcome to my server",
  });
});

app.use("/api", productRoutes);
app.use("/api", navRoutes);
