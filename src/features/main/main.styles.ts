import {
  Box,
  Button,
  TableCell,
  TableRow,
  TextField,
  Typography,
  styled,
  tableCellClasses,
} from "@mui/material";
import { COLORS } from "../../config/globalConstants/colors";

export const MainContainer = styled(Box)({
  marginTop: 20,
  paddingLeft: 40,
  paddingRight: 40,
});

export const MainTypography = styled(Typography)({
  marginBottom: 24,
});

export const StyledTableCell = styled(TableCell)(({ theme }) => ({
  [`&.${tableCellClasses.head}`]: {
    backgroundColor: COLORS.HOME_TABLE_GREY_COLOR,
    color: theme.palette.common.black,
    padding: 8,
    borderBottom: 0,
    "&:first-of-type": {
      borderTopLeftRadius: 8,
      borderBottomLeftRadius: 8,
    },
    "&:last-child": {
      borderTopRightRadius: 8,
      borderBottomRightRadius: 8,
    },
  },
  [`&.${tableCellClasses.body}`]: {
    fontSize: 16,
    "&:first-of-type": {
      maxWidth: 250,
    },
    "&:last-child": {
      width: 10,
    },
  },
}));

export const StyledTableRow = styled(TableRow)(({ theme }) => ({
  height: 80,
  "&:hover": {
    backgroundColor: theme.palette.action.hover,
  },
}));

export const TableheaderBox = styled(Box)({
  display: "flex",
  justifyContent: "space-between",
  marginBottom: 32,
});

export const SearchField = styled(TextField)({
  width: "40%",
});

export const UserFormButtonsBox = styled(Box)({
  display: "flex",
  justifyContent: "flex-end",
  gap: 8,
  marginTop: 16,
});

export const FormButton = styled(Button)({
  textTransform: "none",
});
