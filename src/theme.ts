import { COLORS } from "@config/globalConstants/colors";
import { orange } from "@mui/material/colors";
import { createTheme } from "@mui/material/styles";

const theme = createTheme({
  palette: {
    primary: {
      main: orange[600],
      light: orange[400],
      dark: orange[800],
      contrastText: COLORS.WHITE,
    },
  },
});

export default theme;
