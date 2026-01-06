const express = require("express");
const router = express.Router();
const { getFiletrProducts } = require("../../controllers/shop/productsController");

router.get("/get", getFiletrProducts);
module.exports = router;
