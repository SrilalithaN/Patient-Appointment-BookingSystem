import React, { useState } from "react";
import { useMutation } from "@apollo/client";
import Auth from "../utils/auth";
import { LOGIN_USER } from "../utils/mutations";
import { Button, Form } from "semantic-ui-react";

const LoginForm = () => {
  const [userFormData, setUserFormData] = useState({ email: "", password: "" });
  const [login] = useMutation(LOGIN_USER);

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setUserFormData({ ...userFormData, [name]: value });
  };

  const handleFormSubmit = async (event) => {
    event.preventDefault();

    try {
      const { data } = await login({ variables: { ...userFormData } });
      Auth.login(data.login.token);
    } catch (err) {
      console.error(err);
    }

    setUserFormData({
      email: "",
      password: "",
    });
  };
  return (
    <Form size="small" onSubmit={handleFormSubmit}>
      <h2>Log In</h2>
      <Form.Input
        label="Email"
        type="text"
        placeholder="patient.name@test.com"
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
        disabled={!(userFormData.email && userFormData.password)}
        type="submit"
      >
        Log In
      </Button>
    </Form>
  );
};

export default LoginForm;