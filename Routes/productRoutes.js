const express = require(`express`);
const router = express.Router();
const Product = require(`../Schemas/productSchema.js`);

router.get(`/`, async (req, res) => {
  const allProducts = await Product.find();
  res.send(allProducts);
});

router.get(`/:id`, async (req, res) => {
  const { id } = req.params;
  const singleProduct = await Product.findById(id);
  res.send(singleProduct);
});

module.exports = router;
