const { Schema, model } = require("mongoose");


const appointmentSchema = new Schema({
  
    bookingId: {
        type: Number
    },
    patientName : {
        type : String
    },
    doctorName : {
        type : String
    },
    date : {
        type: Date
    },
    slotTime : {
        type: String
    },
  
  
}
  );

const Appointment = model('Appointment', appointmentSchema);


module.exports = { Appointment};

