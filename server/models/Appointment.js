const { Schema, model } = require("mongoose");
const dateFormat = require("../utils/dateFormat");
const appointmentSchema = new Schema({
  patientName: {
    type: String,
  },
  doctorName: {
    type: String,
  },
  dateTime: {
    type: Date,
    get: (timestamp) => dateFormat(timestamp),
 
  },
  doctorId: {
    type: String,
  },
  dateId: {
    type: String,
  },
  patientId: {
    type: String,
  },
});

const Appointment = model("Appointment", appointmentSchema);
module.exports = Appointment;
