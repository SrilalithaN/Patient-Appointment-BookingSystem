const { gql } = require("apollo-server-express");

const typeDefs = gql`
type User {
    userId: ID
    username: String!
    email: String!
    appointments : [Appointment]
 }


type Appointment {
    bookingId : ID
    patientName : String!
    doctorName : String!
    date: String!
    slotTime : String!

}


 type Auth {
    token: ID!
    user :User
}
type Query{
    me: User
   appointment:[Appointment]

}
input AppointmentInput{
    patientName : String!
    doctorName : String!
    date: String!
    slotTime : String!
}

type Mutation{
    login(email:String!, password: String!): Auth
    addUser(username: String!, email:String!, password:String!): Auth
    addAppointment( patientName : String!,doctorName : String!,date: String!,slotTime : String!):Appointment
    cancelAppointment(bookingId:ID!) : Appointment

}
`;

module.exports = typeDefs;