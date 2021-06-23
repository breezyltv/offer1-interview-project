export interface IUser {
  id: number;
  firstName: string;
  lastName: string;
  email: string;
  phone: string | null;
  status: string;
}

export interface IPrimaryOwner {
  id: number;
  user: IUser;
}

export interface IAddress {
  id: number;
  addressLine1: string;
  addressLine2: string | null;
  city: string;
  state: string;
  zip: string;
}

export interface IProperty {
  id: number;
  address: IAddress;
  propertyType: string;
  squareFeet: number;
  numberBedrooms: number;
  numberBaths: number;
  description: string;
  primaryOwner: IPrimaryOwner;
  ownerType: string;
  primaryImageUrl: string;
}

export interface IEscrowCompany {
  id: number;
  name: string;
  phone: string | null;
  email: string | null;
  officerName: string;
  address: IAddress;
  type: string;
}

export interface ITitleCompany {
  id: number;
  name: string;
  phone: string | null;
  email: string | null;
  officerName: string;
  address: IAddress;
  type: string;
}

export interface IListingAgent {
  id: number;
  licenseNumber: string;
  licenseState: string;
  user: IUser;
  status: string;
}

export interface IIncludedItems {
  id: number;
  name: string;
  listing: string | null;
}

export interface IExcludedItems {
  id: number;
  name: string;
  listing: string | null;
}

export interface IHome {
  id: number;
  property: IProperty;
  state: string;
  price: number;
  escrowCompany: IEscrowCompany;
  titleCompany: ITitleCompany;
  listingAgent: IListingAgent;
  includedItems: IIncludedItems[] | [];
  excludedItems: IExcludedItems[] | [];
}

export interface IHomes {
  total: number;
  result: IHome[];
}
