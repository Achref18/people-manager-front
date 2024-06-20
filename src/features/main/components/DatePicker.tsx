import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import { useAppDispatch, useAppSelector } from "@hooks/useAppState.hook";
import { RootState } from "@redux/store";
import { setBirthDate } from "@redux/slices/formSlice";
import { Dayjs } from "dayjs";
export default function BirthDatePicker() {
  const dispatch = useAppDispatch();
  const birthDate = useAppSelector((state: RootState) => state.form.birthDate);

  const handleDateChange = (date: Dayjs | null) => {
    dispatch(setBirthDate(date));
  };

  return (
    <LocalizationProvider dateAdapter={AdapterDayjs}>
      <DatePicker
        label="Birth Date"
        value={birthDate}
        onChange={(date) => handleDateChange(date)}
      />
    </LocalizationProvider>
  );
}
