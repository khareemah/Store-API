const connectDB = require('./db/connect');
const Product = require('./models/Product');
const jsonProducts = require('./products.json');
require('dotenv').config();

const start = async () => {
  try {
    console.log('connected');
    await connectDB(process.env.MONGO_URI);
    await Product.deleteMany();
    await Product.create(jsonProducts);
    process.exit(0);
  } catch (error) {
    console.log(error);
    process.exit(1);
  }
};

start();
