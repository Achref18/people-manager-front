import { IconButton } from "@mui/material";
import { StyledTableCell, StyledTableRow } from "../main.styles";
import { UserTableRowProps } from "../types/UserTableRow.type";
import dayjs from "dayjs";
import DeleteIcon from "@mui/icons-material/Delete";
import { DateFormatEnum } from "@config/enums/dateFormat.enum";
import { useDeleteUserMutation } from "@redux/api/users.api";

export default function UserTableRow({ user }: UserTableRowProps) {
  const [deletePerson] = useDeleteUserMutation();

  const handleDelete = async () => {
    try {
      await deletePerson(user._id).unwrap();
    } catch (error) {
      // TODO: Handle error case
      console.log(error);
    }
  };
  return (
    <StyledTableRow>
      <StyledTableCell>{user.firstName}</StyledTableCell>
      <StyledTableCell>{user.lastName}</StyledTableCell>
      <StyledTableCell>{user.gender}</StyledTableCell>
      <StyledTableCell>
        {dayjs(user.dateOfBirth).format(DateFormatEnum.YYYY_MM_DD)}
      </StyledTableCell>
      <StyledTableCell>
        <IconButton color="error" aria-label="delete" onClick={handleDelete}>
          <DeleteIcon />
        </IconButton>
      </StyledTableCell>
    </StyledTableRow>
  );
}
