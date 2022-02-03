import { gql } from "@apollo/client";

export const GET_PATIENTINFO = gql`
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
