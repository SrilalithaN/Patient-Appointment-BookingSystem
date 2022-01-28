const mongoose = require("mongoose");
mongoose.connect(
  process.env.MONGODB_URI || "mongodb://localhost/patient-booking-system",
  {
    useNewUrlParser: true,
  }
);
module.exports = mongoose.connection;