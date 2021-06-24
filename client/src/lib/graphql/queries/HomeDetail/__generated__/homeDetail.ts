/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL query operation: HomeDetail
// ====================================================

export interface HomeDetail_homeDetail_property_address {
  __typename: "TAddress";
  id: number;
  addressLine1: string;
  addressLine2: string | null;
  city: string;
  state: string;
  zip: string;
}

export interface HomeDetail_homeDetail_property {
  __typename: "TProperty";
  address: HomeDetail_homeDetail_property_address;
  description: string | null;
  numberBaths: number;
  numberBedrooms: number;
  squareFeet: number;
  propertyType: string;
  primaryImageUrl: string | null;
}

export interface HomeDetail_homeDetail_listingAgent_user {
  __typename: "TUser";
  id: number;
  firstName: string;
  lastName: string;
}

export interface HomeDetail_homeDetail_listingAgent {
  __typename: "TListingAgent";
  id: number;
  licenseNumber: string;
  user: HomeDetail_homeDetail_listingAgent_user | null;
}

export interface HomeDetail_homeDetail_includedItems {
  __typename: "TIncludedItems";
  id: number;
  name: string;
  listing: string | null;
}

export interface HomeDetail_homeDetail {
  __typename: "THome";
  id: number;
  property: HomeDetail_homeDetail_property;
  state: string;
  price: number;
  listingAgent: HomeDetail_homeDetail_listingAgent;
  includedItems: HomeDetail_homeDetail_includedItems[] | null;
}

export interface HomeDetail {
  homeDetail: HomeDetail_homeDetail | null;
}

export interface HomeDetailVariables {
  id: number;
}
