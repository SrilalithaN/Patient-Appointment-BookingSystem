import gql from "graphql-tag";

export const GET_ME = gql`
  {
    patient {
      _id
      userName
      email
      fullName
      appointments {
        patientName
        doctorName
        date
        slotTime
      }
    }
  }
`;
