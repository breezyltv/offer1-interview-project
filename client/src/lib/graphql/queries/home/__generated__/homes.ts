/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL query operation: homes
// ====================================================

export interface homes_homes_result_property_address {
  __typename: "TAddress";
  id: number;
  addressLine1: string;
  addressLine2: string | null;
  city: string;
  state: string;
  zip: string;
}

export interface homes_homes_result_property {
  __typename: "TProperty";
  address: homes_homes_result_property_address;
  numberBaths: number;
  numberBedrooms: number;
  squareFeet: number;
  propertyType: string;
  primaryImageUrl: string | null;
}

export interface homes_homes_result {
  __typename: "THome";
  id: number;
  property: homes_homes_result_property | null;
  state: string | null;
  price: number;
}

export interface homes_homes {
  __typename: "IHomes";
  total: number;
  result: homes_homes_result[];
}

export interface homes {
  homes: homes_homes;
}
