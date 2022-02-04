import React from "react";
import { useQuery } from "@apollo/client";
import { GET_PATIENTINFO } from "../utils/queries";

const PatientData = () => {
  const { loading, data } = useQuery(GET_PATIENTINFO);
  const patient = data?.patient || [];
  console.log(patient);
debugger;
  if (loading) {
    return <h2>LOADING...</h2>;
  }
  return (
    <div className="patientinfo" key={patient._id}>
      <p> Hello {patient.fullName}! Thank you for booking an Appointment with us!</p>
      <p>Here are your appointment details:</p>
      <p>Patient Name: {patient.appointments.patientName}</p>
      <p>Doctor Name: {patient.appointments.doctorName}</p>
      <p> Date and Time of Appointment: {patient.appointments.dateTime}</p>
    </div>
  );
};
export default PatientData;
