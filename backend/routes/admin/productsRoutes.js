const express = require("express");
const router = express.Router();
const {
  handleImageUpload,
  addNewProduct,
  fetchAllProducts,
  editProduct,
  deleteProduct,
} = require("../../controllers/admin/productControler");
const { upload } = require("../../helpers/cloudinary");

router.post("/upload-image", upload.single("my_file"), handleImageUpload);
router.post('/add', addNewProduct);
router.put('/edit/:id' , editProduct);
router.delete('/delete/:id' , deleteProduct);
router.get('/get' , fetchAllProducts);
module.exports = router;
