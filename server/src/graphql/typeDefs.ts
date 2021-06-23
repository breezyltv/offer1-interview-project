import { gql } from "apollo-server-express";
export const typeDefs = gql`
  type TUser {
    id: Int!
    firstName: String!
    lastName: String!
    email: String!
    phone: String
    status: String!
  }

  type TPrimaryOwner {
    id: Int!
    user: TUser!
  }

  type TAddress {
    id: Int!
    addressLine1: String!
    addressLine2: String
    city: String!
    state: String!
    zip: String!
  }

  type TProperty {
    id: Int!
    address: TAddress!
    propertyType: String!
    squareFeet: Int!
    numberBedrooms: Int!
    numberBaths: Int!
    description: String
    primaryOwner: TPrimaryOwner!
    ownerType: String!
    primaryImageUrl: String
  }

  type TEscrowCompany {
    id: Int!
    name: String!
    phone: String
    email: String
    officerName: String!
    address: TAddress!
    type: String!
  }
  type TTitleCompany {
    id: Int!
    name: String!
    phone: String
    email: String
    officerName: String!
    address: TAddress!
    type: String!
  }

  type TListingAgent {
    id: Int!
    licenseNumber: String!
    licenseState: String!
    user: TUser
    status: String!
  }

  type TIncludedItems {
    id: Int!
    name: String!
    listing: String
  }
  type TExcludedItems {
    id: Int!
    name: String!
    listing: String
  }

  type THome {
    id: Int!
    property: TProperty
    state: String
    price: Int!
    escrowCompany: TEscrowCompany
    titleCompany: TTitleCompany
    listingAgent: TListingAgent
    includedItems: [TIncludedItems]
    excludedItems: [TExcludedItems]
  }

  type IHomes {
    total: Int!
    result: [THome!]!
  }

  type Query {
    homes: IHomes!
  }
`;
