import React from "react";
import { useQuery } from "@apollo/client";
import { GET_PATIENTINFO } from "../utils/queries";

const Patient = () => {
  const { loading, data } = useQuery(GET_PATIENTINFO);
  const patientData = data?.patient || [];
  console.log(patientData);
debugger;
  if (loading) {
    return <h2>LOADING...</h2>;
  }
  return (
    <div className="patientinfo" key={patientData._id}>
      <p> Hello {patientData.fullName}! Thank you for booking an Appointment with us!</p>
      <p>Here are your appointment details:</p>
      <p>Patient Name: {patientData.appointments.patientName}</p>
      <p>Doctor Name: {patientData.appointments.doctorName}</p>
      <p> Date and Time of Appointment: {patientData.appointments.dateTime}</p>
    </div>
  );
};
export default Patient;
