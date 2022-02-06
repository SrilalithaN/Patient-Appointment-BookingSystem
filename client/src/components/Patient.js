import React from "react";
import { useQuery } from "@apollo/client";
import { GET_PATIENTINFO } from "../utils/queries";
import Auth from "../utils/auth";
import { Button } from "semantic-ui-react";
import { formatInTimeZone } from "date-fns-tz";
// import { Segment  , Message} from 'semantic-ui-react'


const PatientData = () => {
  const { loading, data } = useQuery(GET_PATIENTINFO);
  const patient = data?.patient || [];

  let appointmentDate = new Date();

  if (patient && patient.appointments) {
    appointmentDate = formatInTimeZone(
      patient.appointments[0].dateTime,
      "Australia/Melbourne",
      "dd-MM-yyyy HH:mm"
    );
  }



  const logout = (event) => {
    event.preventDefault();
    Auth.logout();
  };
  if (loading) {
    return <h2>LOADING...</h2>;
  }
  return (
    <div key={patient._id}>
      <p className="patientInfo">
  
        Hello <span className="user">{patient.fullName}!</span> Thank you for booking an Appointment with us!
      </p>
      <p className="patientInfo">Here are your appointment details:</p>
      <p className="patientInfo">Patient Name: {patient.appointments[0].patientName}</p>
      <p className="patientInfo">Doctor Name: {patient.appointments[0].doctorName}</p>
      <p className="patientInfo"> Date and Time of Appointment: {appointmentDate}</p>
      <Button size = "large" onClick={logout}  color ="blue" type="submit">
       Logout
      </Button>
 </div>

  // <div className="container">
  //    <Message
  //      className="container"
  //      size="large"
  //       header=" Hello" {patient.fullName} "Thank you for booking an Appointment with us!"
    
  //     />
  //   <Segment vertical>
  //     Te eum doming eirmod, nominati pertinacia argumentum ad his.
  //   </Segment>
  //   <Segment vertical>Pellentesque habitant morbi tristique senectus.</Segment>
  //   <Segment vertical>
  //     Eu quo homero blandit intellegebat. Incorrupte consequuntur mei id.
  //   </Segment>
 

  //     <Button size = "large" onClick={logout}  color ="blue" type="submit">
  //       Logout
  //     </Button>
  //   </div>
  );
};
export default PatientData;
