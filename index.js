const express = require(`express`);
const app = express();
const { connect } = require(`mongoose`);
const path = require(`path`);
const PORT = 3000;
const ejs = require(`ejs`);
const methodOverride = require(`method-override`);

// Database connection
(async () => {
  try {
    await connect(`mongodb://127.0.0.1:27017/testdb`);
    console.log(`Database conected successfully!!!`);
  } catch (error) {
    console.log(error);
  }
})();

const Product = require(`./Schemas/productSchema.js`);

app.use(`/products`, require(`./Routes/productRoutes.js`));

app.get(`/`, (req, res) => {
  res.send(`<h1>Server is working fine!!!</h1>`);
});

app.listen(PORT, () => {
  console.log(`Server is running at http:127.0.0.1:${PORT}`);
});
