import { IconButton, Menu, MenuItem, Typography } from "@mui/material";
import MailIcon from "@mui/icons-material/Mail";
import NotificationsIcon from "@mui/icons-material/Notifications";
import SettingsIcon from "@mui/icons-material/Settings";
import { MobileMenuProps } from "../types/MobileMenu.type";
import { dashboardConstants } from "../constants/dashboard.constant";
import { StyledBadge } from "../dashboard.styles";

export default function MobileMenu({
  mobileMoreAnchorEl,
  isMobileMenuOpen,
  handleMobileMenuClose,
}: MobileMenuProps) {
  return (
    <Menu
      anchorEl={mobileMoreAnchorEl}
      keepMounted
      open={isMobileMenuOpen}
      onClose={handleMobileMenuClose}
    >
      <MenuItem>
        <IconButton size="large" color="inherit">
          <StyledBadge badgeContent={dashboardConstants.EMAIL_CONTENT}>
            <MailIcon />
          </StyledBadge>
        </IconButton>
        <Typography>{dashboardConstants.MESSAGES}</Typography>
      </MenuItem>
      <MenuItem>
        <IconButton size="large" color="inherit">
          <StyledBadge badgeContent={dashboardConstants.NOTIF_CONTENT}>
            <NotificationsIcon />
          </StyledBadge>
        </IconButton>
        <Typography>{dashboardConstants.NOTIFICATIONS}</Typography>
      </MenuItem>
      <MenuItem>
        <IconButton size="large" color="inherit">
          <SettingsIcon />
        </IconButton>
        <Typography>{dashboardConstants.SETTINGS}</Typography>
      </MenuItem>
    </Menu>
  );
}
