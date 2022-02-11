import React, { useState } from "react";
import { useMutation } from "@apollo/client";
import { useHistory } from "react-router-dom";
import Auth from "../utils/auth";
import { LOGIN_USER } from "../utils/mutations";
import { Button, Form, Message } from "semantic-ui-react";
import Navbar from "./Navbar";

const LoginForm = () => {
  const [userFormData, setUserFormData] = useState({ email: "", password: "" });
  const [login] = useMutation(LOGIN_USER);
  const [error, setError] = useState(false);
  const history = useHistory();

  const handleInputChange = (event) => {
    setError(false);
    const { name, value } = event.target;
    setUserFormData({ ...userFormData, [name]: value });
  };

  const handleFormSubmit = async (event) => {
    event.preventDefault();

    try {
      const { data } = await login({ variables: { ...userFormData } });
      Auth.login(data.login.token);
      history.push("/appointments");
    } catch (err) {
      setError(true);
      console.error(err);
    }

    setUserFormData({
      email: "",
      password: "",
    });
  };
  return (
    <div className="container">
      <Navbar />
      <Form size="large" className="login" onSubmit={handleFormSubmit}>
        <h2>Log In to make a booking</h2>
        {error === true ? (
          <Message negative size="small" className="container">
            <Message.Header>Error</Message.Header>
            <p>Incorrect credentials!</p>
          </Message>
        ) : (
          ""
        )}
        <Form.Input
          width={6}
          label="Email"
          type="text"
          placeholder="patient.name@test.com"
          name="email"
          onChange={handleInputChange}
          value={userFormData.email}
          className="form-input"
        />
        <Form.Input
          width={6}
          label="Password"
          type="password"
          placeholder="*******"
          name="password"
          onChange={handleInputChange}
          value={userFormData.password}
          className="form-input"
        />

        <Button type="submit" size="large" color="blue">
          Log In
        </Button>
      </Form>
    </div>
  );
};

export default LoginForm;
