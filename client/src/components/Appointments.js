import React, { useState } from "react";
import { Button, Form, Dropdown, Message, Modal,Select} from "semantic-ui-react";
import DatePicker from "./datePicker";
import { useMutation } from "@apollo/client";
import { ADD_APPOINTMENT } from "../utils/mutations";
import Auth from "../utils/auth";
// import { useHistory } from "react-router-dom";
// import { FormatDate } from "../utils/helpers";
// import User from "../components/User";
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
  // const history = useHistory();
  const [open, setOpen] = React.useState(false)
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
    
     
    } 
    catch (err) {
      setError(true);
      console.error(err);
    }
    // setUserFormData({
    //  patientName: "",
    //   doctorName: "",
    //   dateTime:"",
    // });

  
  };

  return (
    <Form className="appointment" onSubmit={handleFormSubmit} size="huge">
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
        width={6}
        label="Patient Name"
        type="text"
        placeholder="Harry"
        name="patientName"
        onChange={handleInputChange}
        value={userFormData.patientName}
      />

      <Form.Input
      className="dropdown"
        width={6}
        control={Select}
        label="Doctor Name"
        name="doctorName"
        options={docOptions}
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
        value={(userFormData.dateTime)}
        name="dateTime"
      />
           
           <Modal
      centered={false}
      open={open}
      onClose={() => setOpen(false)}
      onOpen={() => setOpen(true)}
      trigger={     <Button
        disabled={
          !(
            userFormData.patientName &&
            userFormData.doctorName &&
            userFormData.dateTime
          )
        }
        type="submit"
        size ="huge"
        color="blue"
      >
        Submit
      </Button>}
    >
      <Modal.Header>Thank you for booking an Appointment with us!</Modal.Header>
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
 
      <Button onClick={logout} type="submit" size ="huge" color="blue">
        Logout
      </Button>
    </Form>
  );
};

export default AppointmentForm;
