const { Schema, model } = require("mongoose");

const appointmentSchema = new Schema({
  patientName: {
    type: String,
  },
  doctorName: {
    type: String,
  },
  dateTime: {
    type: String,
  }
});

const Appointment = model("Appointment", appointmentSchema);
module.exports = Appointment;
