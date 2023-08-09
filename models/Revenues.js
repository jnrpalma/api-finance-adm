const mongoose = require("mongoose");

const Revenues = mongoose.model("Revenues", {
  user: {
    title: String,
    month: {
      title: String,
      listMonth: {
        typeRevenue: String,
        value: String,
        dateEntry: String,
      },
    },
  },
});

module.exports = Revenues;
