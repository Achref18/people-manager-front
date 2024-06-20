import {
  Table,
  TableBody,
  TableContainer,
  TableHead,
  TableRow,
} from "@mui/material";
import { USER_TABLE_HEADER } from "../main.constants";
import { StyledTableCell } from "../main.styles";
import UserTableRow from "./UserTableRow";
import { useGetUsersQuery } from "@redux/api/users.api";
import UserTableHeader from "./UserTableHeader";

export default function UsersTable() {
  const { data } = useGetUsersQuery();

  return (
    <>
      <TableContainer>
        <UserTableHeader />
        <Table>
          <TableHead>
            <TableRow>
              {USER_TABLE_HEADER.map((column, index) => (
                <StyledTableCell key={index}>{column}</StyledTableCell>
              ))}
            </TableRow>
          </TableHead>
          <TableBody>
            {data?.map((user) => (
              <UserTableRow key={user._id} user={user} />
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </>
  );
}
