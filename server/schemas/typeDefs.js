const { gql } = require("apollo-server-express");

const typeDefs = gql`
  type User {
    _id: ID
    userName: String!
    fullName: String!
    email: String!
    appointments: [Appointment]
  }

  type Appointment {
    _id: ID
    patientName: String!
    doctorName: String!
    dateTime: String!
  }

  type Auth {
    token: ID!
    user: User
  }

  type Query {
    patient: User
  }

  type Mutation {
    login(email: String!, password: String!): Auth
    signup(
      userName: String!
      email: String!
      password: String!
      fullName: String!
    ): Auth

    addAppointment(
      patientName: String!
      doctorName: String!
      dateTime: String!
    ): Appointment


  }
`;

module.exports = typeDefs;
