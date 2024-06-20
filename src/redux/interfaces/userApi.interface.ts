import { GenderEnum } from "@config/enums/gender.enum";
import { Dayjs } from "dayjs";

interface User {
  firstName: string;

  lastName: string;
  dateOfBirth: Dayjs;
  gender: GenderEnum;
}
export interface GetUsersApiResponse extends User {
  _id: string;
}

export type CreateUserRequest = User;
