import React, { useState } from "react";
import { Button, Form, Message, Select } from "semantic-ui-react";
import DatePicker from "./datePicker";
import { useMutation } from "@apollo/client";
import { ADD_APPOINTMENT } from "../utils/mutations";
import Auth from "../utils/auth";
import { useHistory } from "react-router-dom";

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
  const handleInputChange = (event, { value, name }) => {
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
        onChange={handleInputChange}
        value={userFormData.doctorName}
      />

      <Form.Field
        width={8}
        label="Date-Time"
        control={DatePicker}
        onChange={(value) =>
          handleInputChange(
            {},
            { name: "dateTime", value: value.toISOString() }
          )
        }
        value={userFormData.dateTime}
        name="dateTime"
      />

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
  );
};

export default AppointmentForm;
