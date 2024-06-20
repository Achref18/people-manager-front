import { Paper, styled } from "@mui/material";

export const StyledModalPaper = styled(Paper)({
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  boxShadow: "rgba(0, 0, 0, 0.24) 0px 3px 8px",
  padding: 32,
});
