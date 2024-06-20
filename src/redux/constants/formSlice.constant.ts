import { FormState } from "@redux/interfaces/formSlice.interface";
import { globalVariables } from "@config/globalConstants/globalVariables";
import { GenderEnum } from "@config/enums/gender.enum";

export const initialState: FormState = {
  firstName: globalVariables.EmptyString,
  lastName: globalVariables.EmptyString,
  gender: GenderEnum.Male,
  birthDate: null,
};
