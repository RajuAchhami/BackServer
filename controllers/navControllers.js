import NavItems from "../models/Nav.js";
export const getNav = async (req, res) => {
  try {
    const nav = await NavItems.find({});
    return res.status(200).json({ status: "Success", data: nav });
  } catch (err) {
    return res.status(400).json({ status: "error", message: `${err}` });
  }
};
