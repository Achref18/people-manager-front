import { CssBaseline, Toolbar } from "@mui/material";
import { AdminAppBar, FlexBox } from "./dashboard.styles";
import { useState } from "react";
import LeftSectionAppBar from "./components/LeftSectionAppBar";
import RightSectionAppBar from "./components/RightSectionAppBar";
import MobileMenu from "./components/MobileMenu";
import SideList from "./components/SideList";

export default function Dashboard() {
  const [open, setOpen] = useState<boolean>(false);
  const [mobileMoreAnchorEl, setMobileMoreAnchorEl] =
    useState<null | HTMLElement>(null);

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleMobileMenuClose = () => {
    setMobileMoreAnchorEl(null);
  };

  const handleMobileMenuOpen = (event: React.MouseEvent<HTMLElement>) => {
    setMobileMoreAnchorEl(event.currentTarget);
  };
  const isMobileMenuOpen = Boolean(mobileMoreAnchorEl);
  return (
    <>
      <FlexBox>
        <CssBaseline />
        <AdminAppBar position="fixed" open={open}>
          <Toolbar>
            <LeftSectionAppBar
              open={open}
              handleDrawerOpen={handleDrawerOpen}
            />
            <RightSectionAppBar handleMobileMenuOpen={handleMobileMenuOpen} />
          </Toolbar>
        </AdminAppBar>
        <MobileMenu
          mobileMoreAnchorEl={mobileMoreAnchorEl}
          handleMobileMenuClose={handleMobileMenuClose}
          isMobileMenuOpen={isMobileMenuOpen}
        />
        <SideList {...{ open, setOpen }} />
      </FlexBox>
    </>
  );
}
