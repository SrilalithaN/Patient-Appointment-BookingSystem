import { gql } from "@apollo/client";

export const SIGNUP = gql`
  mutation signup(
    $userName: String!
    $fullName: String!
    $email: String!
    $password: String!
  ) {
    signup(
      userName: $userName
      fullName: $fullName
      email: $email
      password: $password
    ) {
      token
      user {
        _id
        userName
        fullName
      }
    }
  }
`;

export const LOGIN_USER = gql`
  mutation login($email: String!, $password: String!) {
    login(email: $email, password: $password) {
      token
      user {
        _id
      }
    }
  }
`;

export const ADD_APPOINTMENT = gql`
  mutation addAppointment(
    $patientName: String!
    $doctorName: String!
    $dateTime: String!
 
  ) {
    addAppointment(
      patientName: $patientName
      doctorName: $doctorName
      dateTime: $dateTime
    
    ) {
      _id
      patientName
      doctorName
      dateTime
    
    }
  }
`;


export const CANCEL_APPOINTMENT = gql`
mutation CancelAppointment($bookingId: ID!) {
  cancelAppointment(bookingId: $bookingId) {
    patientName
    doctorName
    dateTime
  }
}
`;