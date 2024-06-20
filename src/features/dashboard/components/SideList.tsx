import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import ListItem from "@mui/material/ListItem";
import Divider from "@mui/material/Divider";
import List from "@mui/material/List";
import IconButton from "@mui/material/IconButton";
import { Route, Routes, useNavigate } from "react-router";
import { SideListProps } from "../types/SideList.type";
import {
  AdminDrawer,
  DrawerHeader,
  MainBox,
  StyledListItemButton,
  StyledListItemIcon,
  StyledListItemText,
} from "../dashboard.styles";
import { DashboardSideList } from "../constants/sideList.constant";
import { useMemo, useState } from "react";
import { globalVariables } from "../../../config/globalConstants/globalVariables";

function SideList({ open, setOpen }: SideListProps) {
  const [selectedPath, setselectedPath] = useState<string>(
    globalVariables.EmptyString
  );

  const list = useMemo(() => DashboardSideList(setselectedPath), []);
  const navigate = useNavigate();

  return (
    <>
      <AdminDrawer variant="permanent" open={open}>
        <DrawerHeader>
          <IconButton onClick={() => setOpen(false)}>
            <ChevronLeftIcon />
          </IconButton>
        </DrawerHeader>
        <Divider />
        <List>
          {list.map((item) => (
            <ListItem key={item.title} disablePadding>
              <StyledListItemButton
                open={open}
                onClick={() => navigate(item.path)}
                selected={selectedPath === item.path}
              >
                <StyledListItemIcon open={open}>{item.icon}</StyledListItemIcon>
                <StyledListItemText primary={item.title} open={open} />
              </StyledListItemButton>
            </ListItem>
          ))}
        </List>
      </AdminDrawer>
      <MainBox component="main">
        <DrawerHeader />
        <Routes>
          {list.map((item) => (
            <Route key={item.title} path={item.path} element={item.component} />
          ))}
        </Routes>
      </MainBox>
    </>
  );
}

export default SideList;
