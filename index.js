require("dotenv").config();
const express = require("express");
const server = express();
const productRoute = require("./routes/products");
const userRoute = require("./routes/user");
const path = require('path')
const cors = require('cors')

server.use(cors())

// connecting database
const mongoose = require("mongoose");
main().catch((err) => console.log(err));
async function main() {
  await mongoose.connect(process.env.MONGO_ATLAS_URL);
  console.log("mongoose connected");
}

server.use(express.static(process.env.PUBLIC_DIR))

//body parser
server.use(express.json());
server.use("/products", productRoute.routes);
server.use("/user", userRoute.routes);
server.use("*",(req,res)=>{
  res.sendFile(path.resolve(__dirname,'dist','index.html'))
}); 

// to use env file first install dotenv
console.log(process.env.DB_PASSWORD); //environment variable
console.log(process.env.PORT); //environment variable

server.listen(process.env.PORT, () => {
  console.log("server created");
});
