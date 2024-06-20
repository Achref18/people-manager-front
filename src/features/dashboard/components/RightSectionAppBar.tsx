import { IconButton } from "@mui/material";
import MailIcon from "@mui/icons-material/Mail";
import NotificationsIcon from "@mui/icons-material/Notifications";
import MoreIcon from "@mui/icons-material/MoreVert";
import SettingsIcon from "@mui/icons-material/Settings";
import { dashboardConstants } from "../constants/dashboard.constant";
import { RightSectionAppBarProps } from "../types/RightSectionAppBar.type";
import { IconsBox, ShowMoreBox, StyledBadge } from "../dashboard.styles";

export default function RightSectionAppBar({
  handleMobileMenuOpen,
}: RightSectionAppBarProps) {
  return (
    <>
      <IconsBox>
        <IconButton size="large" color="inherit">
          <StyledBadge badgeContent={dashboardConstants.EMAIL_CONTENT}>
            <MailIcon />
          </StyledBadge>
        </IconButton>
        <IconButton size="large" color="inherit">
          <StyledBadge badgeContent={dashboardConstants.NOTIF_CONTENT}>
            <NotificationsIcon />
          </StyledBadge>
        </IconButton>
        <IconButton size="large" edge="end" color="inherit">
          <SettingsIcon />
        </IconButton>
      </IconsBox>
      <ShowMoreBox>
        <IconButton size="large" onClick={handleMobileMenuOpen} color="inherit">
          <MoreIcon />
        </IconButton>
      </ShowMoreBox>
    </>
  );
}
