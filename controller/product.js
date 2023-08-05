// const fs = require("fs");
// const products = JSON.parse(
//   fs.readFileSync(process.cwd() + "/data.json", "utf-8")
// );

const productModel = require("../model/product");
const Product = productModel.Product;

exports.createProduct = async (req, res) => {
  // const product = new Product(req.body);
  // product.title = "Phonex 2";
  // product.description = "Phonex description etert fsd";
  // product.rating = "3.55";
  // product.price = "9837";
  // product.brand = "brand 2";
  // product.category = "category";

  // const product = new Product(req.body);
  // product.save()
  //   .then((doc) => {
  //     res.status(201).json(doc);
  //   }).catch((error) => {
  //     res.status(201).json(error);
  //   });

  try {
    // const productCreated = await Product.insertMany(req.body)
    const product = new Product(req.body);
    const productCreated = await product.save();
    res.json(productCreated);
  } catch (error) {
    res.json(error);
  }
};

exports.getAllProducts = async (req, res) => {
  try {
    const allProducts = await Product.find();
    res.json(allProducts);
  } catch (error) {
    console.log(error);
    res.json(error);
  }
};
exports.getSingleProduct = async (req, res) => {
  try {
    const singleProducts = await Product.findById(req.params.id);
    res.json(singleProducts);
  } catch (error) {
    console.log(error);
    res.json(error);
  }
};
exports.replaceProduct = async (req, res) => {
  try {
    const replaceProduct = await Product.findOneAndReplace({ _id: req.params.id },req.body,{ new: true });
    res.status(201).json(replaceProduct);
  } catch (error) {
    console.log(error);
    res.json(error);
  }
};
exports.updateValue = async (req, res) => {
  try {
    const updateValue = await Product.findOneAndUpdate({ _id: req.params.id },req.body,{ new: true });
    res.status(201).json(updateValue);
  } catch (error) {
    console.log(error);
    res.json(error);
  }
};
exports.deleteProduct = async (req, res) => {
  try {
    const deleteProducts = await Product.findOneAndDelete({_id: req.params.id});
    res.json(deleteProducts);
  } catch (error) {
    console.log(error);
    res.json(error);
  }
};
