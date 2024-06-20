import {
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  SelectChangeEvent,
} from "@mui/material";
import { mainConstants } from "../main.constants";
import { GenderEnum } from "@config/enums/gender.enum";
import { useAppDispatch, useAppSelector } from "@hooks/useAppState.hook";
import { RootState } from "@redux/store";
import { setGender } from "@redux/slices/formSlice";
import { globalVariables } from "@config/globalConstants/globalVariables";

export default function GenderSelect() {
  const dispatch = useAppDispatch();
  const selectedGender = useAppSelector(
    (state: RootState) => state.form.gender
  );

  const handleGenderChange = (event: SelectChangeEvent<GenderEnum>) => {
    dispatch(setGender(event.target.value as GenderEnum));
  };
  return (
    <FormControl fullWidth>
      <InputLabel>{mainConstants.GENDER}</InputLabel>
      <Select
        label={mainConstants.GENDER}
        value={selectedGender || globalVariables.EmptyString}
        onChange={handleGenderChange}
      >
        <MenuItem value={GenderEnum.Male}>{mainConstants.MALE}</MenuItem>
        <MenuItem value={GenderEnum.Female}>{mainConstants.FEMALE}</MenuItem>
      </Select>
    </FormControl>
  );
}
