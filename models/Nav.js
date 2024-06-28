import mongoose from "mongoose";

const navSchema = new mongoose.Schema({});

const Nav = mongoose.model("NavItems", navSchema);

export default Nav;
