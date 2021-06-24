import { IResolvers } from "apollo-server-express";
import { IHomes, IHome } from "../../../lib/types";
import { IHomeDetailArg } from "./type";
export const listingResolvers: IResolvers = {
  Query: {
    homes: (
      _root: undefined,
      {},
      { listings }: { listings: IHome[] }
    ): IHomes => {
      try {
        const data: IHomes = {
          total: listings ? listings.length : 0,
          result: listings ? listings : [],
        };
        //console.log("[listing] return mock...", listings);
        return data;
      } catch (error) {
        console.log("[listing(homes)] error...", error);
        throw new Error(error);
      }
    },
    homeDetail: (
      _root: undefined,
      { id }: IHomeDetailArg,
      { listings }: { listings: IHome[] }
    ): IHome | undefined => {
      console.log("id is: ", id);

      try {
        const homeDetail = listings.find((home) => home.id === id);
        return homeDetail;
      } catch (error) {
        console.log("[listing(homeDetail)] error...", error);
        throw new Error("Failed to query home detail with ID: " + id);
      }
    },
  },
};
