import { gql } from "apollo-boost";

export const HOME_DETAIL = gql`
  query HomeDetail($id: Int!) {
    homeDetail(id: $id) {
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
        description
        numberBaths
        numberBedrooms
        squareFeet
        propertyType
        primaryImageUrl
      }
      state
      price
      listingAgent {
        id
        licenseNumber
        user {
          id
          firstName
          lastName
        }
      }
      includedItems {
        id
        name
        listing
      }
    }
  }
`;
