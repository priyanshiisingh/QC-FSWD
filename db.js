const mongoose = require("mongoose");

const url =
  "mongodb+srv://priyanshi18:prii18_mongodb@qc.txd8c.mongodb.net/test";

module.exports.connect = () => {
  mongoose
    .connect(url, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    })
    .then(() => {
      console.log("MongoDB connected successfully");
    })
    .catch((error) => console.log("Error: ", error));
};
