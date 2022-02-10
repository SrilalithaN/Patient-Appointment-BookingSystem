import React from "react";
import { useQuery } from "@apollo/client";
import { GET_PATIENTINFO } from "../utils/queries";
import { FormatDate } from "../utils/helpers";
import { Card } from "semantic-ui-react";
import Navbar from "./Navbar";

const PatientData = () => {
  const { loading, data } = useQuery(GET_PATIENTINFO);
  const patient = data?.patient || [];

  if (loading) {
    return <h2>LOADING...</h2>;
  }
  return (
    <div>
      <Navbar />
      <div className="home ui container">
        <h2>
          Hello <span className="user">{patient.fullName}!</span>
        </h2>

        <p className="patientInfo">Here are your appointment details:</p>
        {patient.appointments.map((appointment) => {
          return (
            <Card.Group itemsPerRow={2} className="patientCard">
              <Card>
                <Card.Description>
                  <div className="patientInfo">
                    <p className="patientInfo">
                      Patient Name: {appointment.patientName}
                    </p>
                    <p className="patientInfo">
                      Doctor Name: {appointment.doctorName}
                    </p>
                    <p className="patientInfo">
                      Date and Time of Appointment:
                      {FormatDate(appointment.dateTime)}
                    </p>
                  </div>
                </Card.Description>
              </Card>
            </Card.Group>
          );
        })}
      </div>
    </div>
  );
};
export default PatientData;
