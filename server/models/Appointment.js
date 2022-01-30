const { Schema, model } = require("mongoose");


const appointmentSchema = new Schema({
  
    bookingId: {
        type: String
    },
    patientName : {
        type : String
    },
    doctorName : {
        type : String
    },
    date : {
        type: String
    },
    slotTime : {
        type: String
    },
  
  
}
  );



const Appointment = model("Appointment",appointmentSchema)
module.exports = Appointment;

