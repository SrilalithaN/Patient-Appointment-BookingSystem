const { gql } = require("apollo-server-express");

const typeDefs = gql`
type User {
    userId: ID
    username: String!
    email: String!
   
 }
 type Appointment {
     bookingId : ID
     patientName : String!
     doctorName : String!
     date: Date!
     slotTime : String!

 }
input AppointmentInput{
    bookingId : ID
    patientName : String!
    doctorName : String!
    date: Date!
    slotTime : String!

}
 type Auth {
    token: ID!
    user :User
}
type Query{
    me: User
    appointments(userId :ID!):[Appointment]
    appointment(bookingId:ID!):Appointment
}

type Mutation{
    login(email:String!, password: String!): Auth
    addUser(username: String!, email:String!, password:String!): Auth
    addAppointment(appointmentData:AppointmentInput!):Appointment
    cancelAppointment(bookingId : ID!):Appointment
}
`;

module.exports = typeDefs;