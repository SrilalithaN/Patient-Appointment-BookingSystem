const { Schema, model } = require("mongoose");

const appointmentSchema = new Schema({
  
  doctorId: {
    type: String,
  },
  dateId: {
    type: String,
  },
  slotId: {
    type: String,
  },
  patientId: {
    type: String,
  },
  patientName: {
    type: String,
  },
  doctorName: {
    type: String,
  },
  date: {
    type: String,
  },
  slotTime: {
    type: String,
  },
});

const Appointment = model("Appointment", appointmentSchema);
module.exports = Appointment;
