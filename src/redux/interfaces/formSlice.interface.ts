import { GenderEnum } from "@config/enums/gender.enum";
import { Dayjs } from "dayjs";

export interface FormState {
  firstName: string;
  lastName: string;
  gender: GenderEnum;
  birthDate: Dayjs | null;
}
