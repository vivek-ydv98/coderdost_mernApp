const mongoose = require("mongoose");
const { Schema } = mongoose;

const productSchema = new Schema({
  title: { type: String, required: [true, "required hai bidu"] },
  description: String,
  price: { type: Number },
  rating: {type: Number, min: [0, "wrong min rating"], max: [5, "wrong max rating"],default:0},
  discountPercentage: { type: Number, min: [0, "wrong min discount"] },
  brand: { type: String, required: true },
  category: { type: String, required: true },
  thumbnail:{type: String,required:true},
  date: { type: Date, default: Date.now },

  //   email: {
  //     type: String,
  //     required: true,
  //     unique: true
  //   },
});

exports.Product = mongoose.model("Product", productSchema);
