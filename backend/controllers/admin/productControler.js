const { ImageUploadUtil } = require("../../helpers/cloudinary");
const Product = require("../../models/product");

const handleImageUpload = async (req, res) => {
  try {
    if (!req.file) {
      return res.json({
        success: false,
        message: "No file uploaded",
      });
    }
    console.log(req.file, "text");
    const b64 = Buffer.from(req.file.buffer).toString("base64");

    const url = `data:${req.file.mimetype};base64,${b64}`;

    const result = await ImageUploadUtil(url);

    res.json({
      success: true,
      result,
    });
  } catch (err) {
    console.log(err);
    res.json({
      success: false,
      message: "Error Occurred",
    });
  }
};

// add a new Product Controller
const addNewProduct = async (req, res) => {
  try {
    const {
      image,
      title,
      description,
      category,
      brand,
      price,
      salePrice,
      totalPrice,
      totalStock,
    } = req.body;

    const newlyCreatedProducts = new Product({
      image,
      title,
      description,
      category,
      brand,
      price,
      salePrice,
      totalPrice,
      totalStock,
    });

    await newlyCreatedProducts.save();
    res.status(202).json({
      success : true,
      data : newlyCreatedProducts
    });

  } catch (err) {
    console.log(err);
    res.status(500).json({
      success: false,
      message: "Error Occurred",
    });
  }
};

// fetch all Product
const fetchAllProducts = async (req, res) => {
  try {

      const listOfProducts = await Product.find({});
      res.status(200).json({
        success : true,
        data : listOfProducts,
      })


  } catch (err) {
    console.log(err);
    res.status(500).json({
      success: false,
      message: "Error Occurred",
    });
  }
};

// edit Products
let editProduct = async (req, res) => {
  try {
    const {id} = req.params;
     const {
      image,
      title,
      description,
      category,
      brand,
      price,
      salePrice,
      totalPrice,
      totalStock,
    } = req.body;

    const findProduct = await Product.findById(id);
    if(!findProduct) return res.status(404).json({
      success : false,
      message : "Product is not found",
    });

    findProduct.title = title || findProduct.title;
    findProduct.description = description || findProduct.description;
    findProduct.category = category || findProduct.category;
    findProduct.brand = brand || findProduct.brand;
    findProduct.price = price === '' ? 0 : price || findProduct.price;
    findProduct.salePrice = salePrice === '' ? 0 : salePrice || findProduct.salePrice;
    findProduct.totalPrice = totalPrice || findProduct.totalPrice;
    findProduct.totalStock = totalStock || findProduct.totalStock;
    findProduct.image = image || findProduct.image;


    await findProduct.save();
    res.status(200).json({
      success : true, 
      data : findProduct
    })


  } catch (err) {
    console.log(err);
    res.status(500).json({
      success: false,
      message: "Error Occurred",
    });
  }
};

// delete Products
const deleteProduct = async (req, res) => {

  try {

    const {id} = req.params
    const product = await Product.findByIdAndDelete(id);
    if(!product) return res.status(404).json({
      success : false,
      message : "Product is not found",
    });

    res.status(200).json({
      success : true,
      message : 'Product Deleted Successfully' 
    })

  } catch (err) {
    console.log(err);
    res.status(500).json({
      success: false,
      message: "Error Occurred",
    });
  }
};

module.exports = {
  handleImageUpload,
  addNewProduct,
  fetchAllProducts,
  editProduct,
  deleteProduct,
};
