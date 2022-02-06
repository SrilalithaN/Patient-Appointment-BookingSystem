import React, { useState } from "react";
import { Button, Form,  Message, TextArea } from "semantic-ui-react";

const ContactForm = () => {
  const [userFormData, setUserFormData] = useState({
    fullName: "",
    email: "",
    message: "",
  });

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setUserFormData({ ...userFormData, [name]: value });
  };

  const handleFormSubmit = async (event) => {
    event.preventDefault();
    setUserFormData({
      fullName: "",
      email: "",
      message: "",
    });
  };

  return (
    <div>
      <Message
         size="large"
        className="container"
        header="Contact Us!"
        content="Drop in your questions and suggestions here! "
      />
      <Form className="contact" onSubmit={handleFormSubmit} size="huge">
      
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
          width={6}
          label="Email"
          placeholder="patient.name@test.com"
          name="email"
          type="text"
          onChange={handleInputChange}
          value={userFormData.email}
        />
        <Form.Field
         width={8}
          label="Message"
          control={TextArea}
          name="message"
          placeholder="Please leave a message here."
          onChange={handleInputChange}
          value={userFormData.message}
        />

        <Button color="blue" type="submit" size="huge">
          Submit
        </Button>
      </Form>
    </div>
  );
};

export default ContactForm;
