const mongoose = require("mongoose");

const UploadImage = mongoose.model("UploadImage", {
  image: String,
});

module.exports = UploadImage;
