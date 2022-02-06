import React from "react";
import { useQuery } from "@apollo/client";
import { GET_PATIENTINFO } from "../utils/queries";
import Auth from "../utils/auth";
import { Button } from "semantic-ui-react";

const PatientData = () => {
  const { loading, data } = useQuery(GET_PATIENTINFO);
  const patient = data?.patient || [];
  console.log(patient);

  const logout = event => {
    event.preventDefault();
    Auth.logout();
  };
  if (loading) {
    return <h2>LOADING...</h2>;
  }
  return (
    <div className="patientinfo" key={patient._id}>
      <p> Hello {patient.fullName}! Thank you for booking an Appointment with us!</p>
      <p>Here are your appointment details:</p>
      <p>Patient Name: {patient.patientName}</p>
      <p>Doctor Name: {patient.appointments.doctorName}</p>
      <p> Date and Time of Appointment: {patient.appointments.dateTime}</p>
      <Button
        onClick={logout}
          type="submit"
        >
          Logout
        </Button>
    </div>
  );
};
export default PatientData;
