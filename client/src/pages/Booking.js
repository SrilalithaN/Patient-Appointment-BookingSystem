import React from "react";
import Auth from "../utils/auth";
import Signup from "../components/SignUp";
import Appointments from "../components/Appointments";

const Bookings = () => {
  return <>{Auth.loggedIn() ? <Appointments /> : <Signup />}</>;
};
export default Bookings;
