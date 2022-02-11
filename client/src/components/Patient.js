import React from "react";
import { useQuery, useMutation } from "@apollo/client";
import { GET_PATIENTINFO } from "../utils/queries";
import { FormatDate } from "../utils/helpers";
import { Card, Button } from "semantic-ui-react";
import Navbar from "./Navbar";
import { CANCEL_APPOINTMENT } from "../utils/mutations";

const PatientData = () => {
  const { loading, data } = useQuery(GET_PATIENTINFO);

  const patient = data?.patient || [];

  const [cancelAppointment] = useMutation(CANCEL_APPOINTMENT, {
    update(cache, { data: { cancelAppointment } }) {
      try {
        cache.writeQuery({
          query: GET_PATIENTINFO,
          data: { patient: cancelAppointment },
        });
      } catch (e) {
        console.error(e);
      }
    },
  });

  const handleDeleteAppointment = async (bookingId) => {
    try {
      await cancelAppointment({
        variables: { bookingId },
      });
    } catch (error) {}
  };
  if (loading) {
    return <h2>LOADING...</h2>;
  }
  return (
    <div>
      <Navbar />
      <div className="container">
        <h2 className="patientCard">
          Hello <span className="user">{patient.fullName}!</span>
        </h2>
        <p>Please refresh the page to view new appointments.</p>
        <h2 className="patientCard">
          {patient.appointments.length
            ? "Thank you for booking appointment with us"
            : "You have no appointments to view"}
        </h2>

        {patient.appointments.map((appointment) => {
          return (
            <div className="patientCard">
              <Card.Group itemsPerRow={2} key={appointment._id}>
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
                      <Button
                        color="blue"
                        type="submit"
                        size="large"
                        value={appointment._id}
                        onClick={() => handleDeleteAppointment(appointment._id)}
                      >
                        Cancel Appointment
                      </Button>
                    </div>
                  </Card.Description>
                </Card>
              </Card.Group>
            </div>
          );
        })}
      </div>
    </div>
  );
};
export default PatientData;
