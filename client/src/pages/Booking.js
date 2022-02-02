// import Login from "../components/Login";
import Signup from "../components/SignUp";
import Appointments from "../components/Appointments";
import React from "react";
 import Auth from "../utils/auth";


const Bookings = () => {
  return (
    <>
     {Auth.loggedIn() ? (
     <Appointments/>
    ) : (
       <Signup/>
    )}
    </>);
};
export default Bookings;
