import express from "express";
import productRoutes from "./routes/productRoutes.js";
import navRoutes from "./routes/navRoutes.js";
import cors from "cors";
import bodyParser from "body-parser";
import mongoose from "mongoose";

const port = 5000;
const app = express();
app.use(cors());
app.use(bodyParser.json());

main().catch((err) => console.log(err));

async function main() {
  await mongoose
    .connect(
      "mongodb+srv://rajachhami55:Raju12345@cluster0.s3emclp.mongodb.net/demo"
    )
    .then((val) => {
      app.listen(port, () => {
        console.log("Server Started");
      });
    });
}

app.use("/api", productRoutes);
app.use("/api", navRoutes);
