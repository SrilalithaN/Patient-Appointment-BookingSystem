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
    $date: String!
    $slotTime: String!
  ) {
    addAppointment(
      patientName: patientName
      doctorName: $doctorName
      date: $date
      slotTime: $slotTime
    ) {
      appointments {
        patientName
        doctorName
        date
        slotTime
      }
    }
  }
`;

export const CANCEL_APPOINTMENT = gql`
  mutation cancelAppointment($bookingId: ID!) {
    cancelAppointment(bookingId: $bookingId) {
      user {
        fullName
        appointments {
          patientName
          doctorName
          date
          slotTime
        }
      }
    }
  }
`;
