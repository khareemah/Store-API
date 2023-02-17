const Product = require('../models/Product');
const getProducts = (req, res) => {
  res.status(200).json({ message: 'send all products' });
};

module.exports = getProducts;
