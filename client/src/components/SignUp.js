import React, { useState } from "react";
import { Link, useHistory } from "react-router-dom";
import { Button, Form, Icon, Message } from "semantic-ui-react";
import { useMutation } from "@apollo/client";
import Auth from "../utils/auth";
import { SIGNUP } from "../utils/mutations";
//  import Appointments from "../components/Appointments";

const SignupForm = () => {
  const [userFormData, setUserFormData] = useState({
    userName: "",
    fullName: "",
    email: "",
    password: "",
  });
  const [error, setError] = useState(false);
  const history = useHistory();

  const handleInputChange = (event) => {
    setError(false);
    const { name, value } = event.target;
    setUserFormData({ ...userFormData, [name]: value });
  };

  const [signup] = useMutation(SIGNUP);

  const handleFormSubmit = async (event) => {
    event.preventDefault();

    try {
      const { data } = await signup({ variables: { ...userFormData } });
      Auth.login(data.signup.token);
      history.push("/appointments");
      console.log(userFormData);
  
    } catch (err) {
      setError(true);
      console.error(err);
    }
  }


  return (
    <div className="container">
      <Message
       className="container"
       size="large"
        header="Welcome to our booking system!"
        content="Fill out the form below to sign-up for a new account"
      />
       {error === true ? (
        <Message negative size="large"   className="container">
          <Message.Header>Error</Message.Header>
          <p>
            Invalid email address and/or password needs to exceed 5 characters!
          </p>
        </Message>
      ) : (
        ""
      )}
      <Form
        className="signup"
        onSubmit={handleFormSubmit}
        size="huge"
      >
        <Form.Input
          fluid
          width={6}
          label="Full Name"
          placeholder="Full Name"
          name="fullName"
          type="text"
          onChange={handleInputChange}
          value={userFormData.fullName}
        />
        <Form.Input
          fluid
          width={6}
          label="Username"
          placeholder="Username"
          name="userName"
          type="text"
          onChange={handleInputChange}
          value={userFormData.userName}
        />

        <Form.Input
          width={6}
          label="Email"
          placeholder="patient.name@test.com"
          name="email"
          type="text"
          onChange={handleInputChange}
          value={userFormData.email}
        />
        <Form.Input
          width={6}
          label="Password"
          type="password"
          name="password"
          onChange={handleInputChange}
          value={userFormData.password}
        />

        <Button color="blue" type="submit" size="huge">
          Submit
        </Button>
      </Form>
      <Message attached="bottom" warning size ="huge">
        <Icon name="help" />
        Already signed up?&nbsp;<Link to="/login/">Login here </Link>{" "}
        &nbsp;instead.
      </Message>
    </div>
  );
};

export default SignupForm;
