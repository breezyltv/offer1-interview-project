import { gql } from "apollo-boost";

export const HOMES = gql`
  query homes {
    homes {
      total
      result {
        id
        property {
          address {
            id
            addressLine1
            addressLine2
            city
            state
            zip
          }
          numberBaths
          numberBedrooms
          squareFeet
          propertyType
          primaryImageUrl
        }
        state
        price
      }
    }
  }
`;
