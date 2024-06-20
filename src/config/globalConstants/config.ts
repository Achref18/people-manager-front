import { environmentConstants } from "./environment";
import { globalVariables } from "./globalVariables";

export const CONFIG = {
  baseUrl:
    process.env[environmentConstants.BASE_URL] || globalVariables.EmptyString,
};
