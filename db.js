const mongoose = require("mongoose");

const url =
  "mongodb+srv://Irfan:123456Irfan@cluster0.ipwnl.mongodb.net/myFirstDatabase?retryWrites=true&w=majority";

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
