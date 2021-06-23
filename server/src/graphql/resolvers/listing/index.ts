import { IResolvers } from "apollo-server-express";
import { IHomes, IHome } from "../../../lib/types";
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
        console.log("[listing] error...", error);
        throw new Error(error);
      }
    },
  },
};
