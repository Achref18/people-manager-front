import { GenderEnum } from "@config/enums/gender.enum";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { initialState } from "@redux/constants/formSlice.constant";
import { Dayjs } from "dayjs";

const formSlice = createSlice({
  name: "form",
  initialState,
  reducers: {
    setFirstName: (state, action: PayloadAction<string>) => {
      state.firstName = action.payload;
    },
    setLastName: (state, action: PayloadAction<string>) => {
      state.lastName = action.payload;
    },
    setGender: (state, action: PayloadAction<GenderEnum>) => {
      state.gender = action.payload;
    },
    setBirthDate: (state, action: PayloadAction<Dayjs | null>) => {
      state.birthDate = action.payload;
    },
    resetForm: () => {
      return initialState;
    },
  },
});

export const { setFirstName, setLastName, setGender, setBirthDate, resetForm } =
  formSlice.actions;
export default formSlice.reducer;
