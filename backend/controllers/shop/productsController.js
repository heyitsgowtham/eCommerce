const Product = require("../../models/product");

const getFiletrProducts = async (req, res) => {
  try {
    const Products = await Product.find({});
    res.status(200).json({
      success: true,
      data: Products,
    });
  } catch (e) {
    console.log(error);
    res.status(500).json({
      success: false,
      messgae: "Some Error Occured",
    });
  }
};

module.exports = { getFiletrProducts };
