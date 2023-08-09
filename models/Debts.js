const mongoose = require("mongoose");

const Debts = mongoose.model("Debts", {
  user: {
    title: String,
    date: String,
    month: {
      title: String,
      listMonth: {
        debt: String,
        category: String,
        value: String,
        expirationDate: String,
      },
    },
  },
});

module.exports = Debts;
