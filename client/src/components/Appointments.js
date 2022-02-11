import React, { useState } from "react";
import { Button, Form, Message, Select, Modal } from "semantic-ui-react";
import { useMutation } from "@apollo/client";
import { ADD_APPOINTMENT } from "../utils/mutations";
import Navbar from "./Navbar";

const docOptions = [
  { key: "n", text: "Dr.N.S.R.Murthy", value: "Dr.N.S.R.Murthy" },
  { key: "d", text: "Dr.Deepak Nookala", value: "Dr.Deepak Nookala" },
  { key: "p", text: "Dr.Pragnya Karri", value: "Dr.Pragnya Karri" },
];
const AppointmentForm = () => {
  const [userFormData, setUserFormData] = useState({
    patientName: "",
    doctorName: "",
    dateTime: "",
  });
  const [error, setError] = useState(false);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setError(false);
    setUserFormData({ ...userFormData, [name]: value });
  };
  const handleDoctorChange = (event, { value, name }) => {
    setError(false);
    setUserFormData({ ...userFormData, [name]: value });
  };
  const [open, setOpen] = React.useState(false);
  const [addAppointment] = useMutation(ADD_APPOINTMENT);

  const handleFormSubmit = async (event) => {
    event.preventDefault();

    try {
      await addAppointment({ variables: { ...userFormData } });
    } catch (err) {
      setError(true);
      console.error(err);
    }
  };

  return (
    <div>
      <Navbar />

      <Form className="appointment" onSubmit={handleFormSubmit} size="large">
        <h2>Book an Appointment</h2>
        {error === true ? (
          <Message negative size="small">
            <Message.Header>Error</Message.Header>
            <p>Please Enter the correct details!</p>
          </Message>
        ) : (
          ""
        )}
        <Form.Input
          width={8}
          label="Patient Name"
          type="text"
          placeholder="Harry"
          name="patientName"
          onChange={handleInputChange}
          value={userFormData.patientName}
        />

        <Form.Input
          className="dropdown"
          width={8}
          control={Select}
          label="Doctor Name"
          name="doctorName"
          options={docOptions}
          placeholder="Doctor"
          onChange={handleDoctorChange}
          value={userFormData.doctorName}
        />

        <Form.Field width={8}>
          <label>Date and Time</label>
          <input
            type="datetime-local"
            className="date-time"
            name="dateTime"
            onChange={handleInputChange}
            value={userFormData.dateTime}
          />
        </Form.Field>

        <Modal
          centered={false}
          open={open}
          onClose={() => setOpen(false)}
          onOpen={() => setOpen(true)}
          trigger={
            <Button type="submit" size="huge" color="blue">
              Submit
            </Button>
          }
        >
          <Modal.Header>
            Thank you for booking an Appointment with us!
          </Modal.Header>
          <Modal.Content>
            <Modal.Description>
              <h2>Here are your appointment details:</h2>
              <h4>Patient Name: {userFormData.patientName}</h4>
              <h4>Doctor Name: {userFormData.doctorName}</h4>
              <h4> Date and Time of Appointment: {(userFormData.dateTime)}</h4>
            </Modal.Description>
          </Modal.Content>
          <Modal.Actions>
            <Button onClick={() => setOpen(false)}>OK</Button>
          </Modal.Actions>
        </Modal>
      </Form>
    </div>
  );
};

export default AppointmentForm;
