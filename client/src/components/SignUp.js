import React, { useState } from "react";
import { Button, Form } from "semantic-ui-react";
import { useMutation } from "@apollo/client";
import Auth from "../utils/auth";
import { SIGNUP } from "../utils/mutations";

const SignupForm = () => {
  const [userFormData, setUserFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
  });

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setUserFormData({ ...userFormData, [name]: value });
  };

  const [signup] = useMutation(SIGNUP);

  const handleFormSubmit = async (event) => {
    event.preventDefault();

    try {
      const { data } = await signup({ variables: { ...userFormData } });
      Auth.login(data.signup.token);
    } catch (err) {
      console.error(err);
    }

    setUserFormData({
      userName: "",
      fullName: "",
      email: "",
      password: "",
    });
  };

  return (
    <Form size="small" onSubmit={handleFormSubmit}>
      <h2>Sign Up</h2>
      <Form.Input
        label="User Name"
        type="text"
        placeholder="Harry"
        name="userName"
        onChange={handleInputChange}
        value={userFormData.userName}
      />

      <Form.Input
        label="Full Name"
        type="text"
        placeholder="Jack Potter"
        name="fullName"
        onChange={handleInputChange}
        value={userFormData.fullName}
      />

      <Form.Input
        label="Email"
        type="text"
        placeholder="harry@potter@test.com"
        name="email"
        onChange={handleInputChange}
        value={userFormData.email}
      />
      <Form.Input
        label="Password"
        type="password"
        placeholder="*******"
        name="password"
        onChange={handleInputChange}
        value={userFormData.password}
      />

      <Button
        disabled={
          !(
            userFormData.firstName &&
            userFormData.lastName &&
            userFormData.email &&
            userFormData.password
          )
        }
        type="submit"
      >
        Submit
      </Button>
    </Form>
  );
};

export default SignupForm;
