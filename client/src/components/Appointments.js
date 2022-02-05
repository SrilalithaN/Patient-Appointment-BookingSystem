import React, { useState } from "react";
import { Button, Form, Dropdown, Message } from "semantic-ui-react";
import { useHistory } from "react-router-dom";
import DatePicker from "./datePicker";
import { useMutation } from "@apollo/client";
import { ADD_APPOINTMENT } from "../utils/mutations";
import Auth from "../utils/auth";
// import User from "../components/User";
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
  console.log(userFormData);
  const handleFormSubmit = async (event) => {
    event.preventDefault();

    try {
      await addAppointment({ variables: { ...userFormData } });
      console.log(userFormData);
      history.push("/user");
    } catch (err) {
      setError(true);
      console.error(err);
    }

    // setUserFormData({
    //   patientName: "",
    //   doctorName: "",
    //   dateTime: "",
    // });
  };

  return (
    <Form className="appointment" onSubmit={handleFormSubmit} size="large">
      <h2>Book an Appointment</h2>
      {error === true ? (
        <Message negative size="tiny">
          <Message.Header>Error</Message.Header>
          <p>Please Enter the correct details!</p>
        </Message>
      ) : (
        ""
      )}
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
      >
        Submit
      </Button>
      <Button onClick={logout} type="submit">
        Logout
      </Button>
    </Form>
  );
};

export default AppointmentForm;
