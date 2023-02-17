const express = require('express');
const app = express();
const port = process.env.PORT || 3000;
require('dotenv').config();
const connectDB = require('./db/connect');
const notFound = require('./middleware/notFound');
const errorHandlerMiddleWare = require('./middleware/error-handler');
const productsRouter = require('./route/products');

app.use('/api/v1/products', productsRouter);
app.use(notFound);
app.use(errorHandlerMiddleWare);
const start = async () => {
  try {
    await connectDB(process.env.MONGO_URI);
    app.listen(port, console.log(`Server is listening on port ${port}...`));
  } catch (error) {
    console.log(error);
  }
};

start();
