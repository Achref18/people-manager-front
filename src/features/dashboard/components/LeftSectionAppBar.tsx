import SearchIcon from "@mui/icons-material/Search";
import MenuIcon from "@mui/icons-material/Menu";
import { AdminIconButton, 
  DashboardTypography,
  FlexGrowBox,
  Search,
  SearchIconWrapper,
  StyledInputBase,
 } from "../dashboard.styles";
import { dashboardConstants } from "../constants/dashboard.constant";
import { LeftSectionAppBarProps } from "../types/LeftSectionAppBar.type";

export default function LeftSectionAppBar({
  handleDrawerOpen,
  open,
}: LeftSectionAppBarProps) {
  return (
    <>
      <AdminIconButton
        color="inherit"
        aria-label="open drawer"
        onClick={handleDrawerOpen}
        edge="start"
        open={open}
      >
        <MenuIcon />
      </AdminIconButton>
      <DashboardTypography variant="h6" noWrap>
        {dashboardConstants.DASHBOARD}
      </DashboardTypography>
      <Search>
        <SearchIconWrapper>
          <SearchIcon />
        </SearchIconWrapper>
        <StyledInputBase placeholder={dashboardConstants.SEARCH_PLACEHOLDER} />
      </Search>
      <FlexGrowBox />
    </>
  );
}
