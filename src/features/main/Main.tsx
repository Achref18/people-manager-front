import { useEffect } from "react";
import { DashboardPanelProps } from "../dashboard/types/DashboardPanel.type";
import { Grid } from "@mui/material";
import { MainContainer, MainTypography } from "./main.styles";
import { mainConstants } from "./main.constants";
import UsersTable from "./components/UsersTable";
import CreateUserForm from "./components/CreateUser";
export function Main({ path, setselectedPath }: DashboardPanelProps) {
  useEffect(() => {
    setselectedPath(path);
  }, []);
  return (
    <Grid container spacing={2}>
      <Grid item xs={12}>
        <MainContainer>
          <MainTypography variant="h3">{mainConstants.USERS}</MainTypography>
          <UsersTable />
          <CreateUserForm />
        </MainContainer>
      </Grid>
    </Grid>
  );
}
