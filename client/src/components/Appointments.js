import React, { useState } from "react";
import { Button, Form, Dropdown } from "semantic-ui-react";
import DatePicker from "./datePicker";
import { useMutation } from "@apollo/client";
import Auth from "../utils/auth";
import { ADD_APPOINTMENT } from "../utils/mutations";

const options = [
  { key: "n", text: "Dr.N.S.R.Murthy", value: "dr.n.s.r.murthy" },
  { key: "d", text: "Dr.Deepak Nookala", value: "dr.deepak nookala" },
  { key: "p", text: "Dr.Pragnya Karri", value: "dr.pragnya karri" },
];
const AppointmentForm = () => {
  const [userFormData, setUserFormData] = useState({
    patientName: "",
    doctorName: "",
    dateTime: "",
  });
  const handleInputChange = (event, { value, name }) => {
    setUserFormData({ ...userFormData, [name]: value });
  };

  const [addAppointment] = useMutation(ADD_APPOINTMENT);

  const handleFormSubmit = async (event) => {
    event.preventDefault();

    try {
      await addAppointment({ variables: { ...userFormData } });
    } catch (err) {
      console.error(err);
    }

    setUserFormData({
      patientName: "",
      doctorName: "",
      dateTime: "",
    });
  };

  return (
    <Form className="appointment" onSubmit={handleFormSubmit} size="large">
      <h2>Book an Appointment</h2>
      <Form.Input
        width={6}
        label="Patient Name"
        type="text"
        placeholder="Harry"
        name="patientName"
        onChange={handleInputChange}
        value={userFormData.patientName}
      />

      <Form.Field
        width={6}
        control={Dropdown}
        label="Doctor Name"
        name="doctorName"
        options={options}
        placeholder="Doctor"
        onChange={handleInputChange}
        value={userFormData.doctorName}
      />

      <Form.Field
        width={6}
        label="Date-Time"
        control={DatePicker}
        value={userFormData.dateTime}
      />
      <Button
        // (
        //   userFormData.patientName &&
        //   userFormData.doctorName &&
        //   userFormData.dateTime
        // )

        type="submit"
      >
        Submit
      </Button>
    </Form>
  );
};

export default AppointmentForm;
