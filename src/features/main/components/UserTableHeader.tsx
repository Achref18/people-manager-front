import { Button } from "@mui/material";
import { SearchField, TableheaderBox } from "../main.styles";
import { mainConstants } from "../main.constants";
import AddIcon from "@mui/icons-material/Add";
import { openModal } from "@redux/slices/uiSlice";
import { useAppDispatch } from "@hooks/useAppState.hook";

export default function UserTableHeader() {
  const dispatch = useAppDispatch();

  const handleAddClick = () => {
    dispatch(openModal());
  };

  return (
    <TableheaderBox>
      <SearchField
        size="small"
        placeholder={mainConstants.SEARCH_PLACEHOLDER}
      />
      <Button
        startIcon={<AddIcon />}
        variant="contained"
        onClick={handleAddClick}
      >
        {mainConstants.ADD_USER}
      </Button>
    </TableheaderBox>
  );
}
