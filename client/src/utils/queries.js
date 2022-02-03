import { gql } from "@apollo/client";

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
        dateTime
      }
    }
  }
`;
