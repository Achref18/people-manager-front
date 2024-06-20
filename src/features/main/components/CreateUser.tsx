import BasicModal from "@components/modal/Modal";
import { Stack, TextField, Typography } from "@mui/material";
import GenderSelect from "./GenderSelect";
import BirthDatePicker from "./DatePicker";
import { FormButton, UserFormButtonsBox } from "../main.styles";
import { useAppDispatch, useAppSelector } from "@hooks/useAppState.hook";
import { closeModal } from "@redux/slices/uiSlice";
import { mainConstants } from "../main.constants";
import { RootState } from "@redux/store";
import { resetForm, setFirstName, setLastName } from "@redux/slices/formSlice";
import { useCreatePersonMutation } from "@redux/api/users.api";
import { Dayjs } from "dayjs";

export default function CreateUserForm() {
  const { firstName, lastName, gender, birthDate } = useAppSelector(
    (state: RootState) => state.form
  );

  const [createUser, { isLoading }] = useCreatePersonMutation();
  const dispatch = useAppDispatch();

  const handleFirstNameChange = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    dispatch(setFirstName(event.target.value));
  };

  const handleLastNameChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    dispatch(setLastName(event.target.value));
  };

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    try {
      await createUser({
        firstName,
        lastName,
        gender,
        dateOfBirth: birthDate ?? new Dayjs(),
      }).unwrap();
      dispatch(resetForm());
      dispatch(closeModal());
    } catch (error) {
      // TODO:Handle error
      console.log(error);
    }
  };

  const handleClose = () => {
    dispatch(closeModal());
    dispatch(resetForm());
  };

  if (isLoading) return <div>Loading..</div>;

  return (
    <BasicModal>
      <form onSubmit={handleSubmit}>
        <Stack maxWidth={500} minWidth={400} gap={3}>
          <Typography variant="h5">{mainConstants.ADD_USER}</Typography>
          <TextField
            label={mainConstants.FIRST_NAME}
            value={firstName}
            onChange={handleFirstNameChange}
            fullWidth
          />
          <TextField
            label={mainConstants.LAST_NAME}
            value={lastName}
            onChange={handleLastNameChange}
            fullWidth
          />
          <GenderSelect />
          <BirthDatePicker />
        </Stack>
        <UserFormButtonsBox>
          <FormButton onClick={handleClose} variant="outlined" color="inherit">
            {mainConstants.CANCEL}
          </FormButton>
          <FormButton variant="outlined" type="submit">
            {mainConstants.Add}
          </FormButton>
        </UserFormButtonsBox>
      </form>
    </BasicModal>
  );
}
