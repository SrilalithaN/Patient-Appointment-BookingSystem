import React, { useState } from "react";
import { Button, Form, Message, Select } from "semantic-ui-react";

import { useMutation } from "@apollo/client";
import { ADD_APPOINTMENT } from "../utils/mutations";
import Auth from "../utils/auth";
import {  useHistory } from "react-router-dom";
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
  const history = useHistory();

  const logout = (event) => {
    event.preventDefault();
    Auth.logout();
  };
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setError(false);
    setUserFormData({ ...userFormData, [name]: value });
  };
  const handleDoctorChange = (event, { value, name }) => {
    setError(false);
    setUserFormData({ ...userFormData, [name]: value });
  };
  const [addAppointment] = useMutation(ADD_APPOINTMENT);

  const handleFormSubmit = async (event) => {
    event.preventDefault();

    try {
      await addAppointment({ variables: { ...userFormData } });
      console.log(userFormData);
      history.push("/patient");
    } catch (err) {
      setError(true);
      console.error(err);
    }
  };

  return (
    <div>
      <Navbar/>
    
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
      <Button
        disabled={
          !(
            userFormData.patientName &&
            userFormData.doctorName &&
            userFormData.dateTime
          )
        }
        type="submit"
        size="large"
        color="blue"
      >
        Submit
      </Button>

      <Button onClick={logout} type="submit" size="large" color="blue">
        Logout
      </Button>
    </Form>
    </div>
  );
};

export default AppointmentForm;
