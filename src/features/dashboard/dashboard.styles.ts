import {
  Badge,
  Box,
  IconButton,
  InputBase,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Typography,
  alpha,
  styled,
} from "@mui/material";
import MuiAppBar from "@mui/material/AppBar";
import { AppBarProps } from "./types/AdminAppBar.type";
import { drawerWidth } from "./constants/dashboard.constant";
import { StyledIconButtonProps } from "./types/AdminIconButton.type";
import MuiDrawer from "@mui/material/Drawer";
import { Theme, CSSObject } from "@mui/material/styles";
import { StyledListItemButtonProps } from "./types/StyledListItemButton.type";
import { StyledListItemTextProps } from "./types/StyledListItemText.type";
import { StyledListItemIconProps } from "./types/StyledListItemIcon.type";

export const FlexBox = styled(Box)({
  display: "flex",
});

export const AdminAppBar = styled(MuiAppBar, {
  shouldForwardProp: (prop) => prop !== "open",
})<AppBarProps>(({ theme, open }) => ({
  background: "grey",
  zIndex: theme.zIndex.drawer + 1,
  transition: theme.transitions.create(["width", "margin"], {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  ...(open && {
    marginLeft: drawerWidth,
    width: `calc(100% - ${drawerWidth}px)`,
    transition: theme.transitions.create(["width", "margin"], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  }),
}));

export const AdminDrawer = styled(MuiDrawer, {
  shouldForwardProp: (prop) => prop !== "open",
})(({ theme, open }) => ({
  width: drawerWidth,
  flexShrink: 0,
  whiteSpace: "nowrap",
  boxSizing: "border-box",
  ...(open && {
    ...openedMixin(theme),
    "& .MuiDrawer-paper": openedMixin(theme),
  }),
  ...(!open && {
    ...closedMixin(theme),
    "& .MuiDrawer-paper": closedMixin(theme),
  }),
}));

export const DrawerHeader = styled("div")(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  justifyContent: "flex-end",
  padding: theme.spacing(0, 1),
  // necessary for content to be below app bar
  ...theme.mixins.toolbar,
}));

export const StyledListItemButton = styled(
  ListItemButton
)<StyledListItemButtonProps>(({ open }) => ({
  minHeight: 48,
  justifyContent: open ? "initial" : "center",
  paddingRight: 20,
  paddingLeft: 20,
}));

export const StyledListItemText = styled(ListItemText)<StyledListItemTextProps>(
  ({ open }) => ({
    opacity: open ? 1 : 0,
  })
);

const openedMixin = (theme: Theme): CSSObject => ({
  width: drawerWidth,
  transition: theme.transitions.create("width", {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.enteringScreen,
  }),
  overflowX: "hidden",
});

const closedMixin = (theme: Theme): CSSObject => ({
  transition: theme.transitions.create("width", {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  overflowX: "hidden",
  width: `calc(${theme.spacing(7)} + 1px)`,
  [theme.breakpoints.up("sm")]: {
    width: `calc(${theme.spacing(8)} + 1px)`,
  },
});

export const SearchIconWrapper = styled("div")(({ theme }) => ({
  padding: theme.spacing(0, 2),
  height: "100%",
  position: "absolute",
  pointerEvents: "none",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
}));

export const MainBox = styled(Box)(({ theme }) => ({
  padding: 20,
  minHeight: "100vh",
  width: "100vw",
  [theme.breakpoints.down("md")]: {
    paddingLeft: 0,
    width: "90vw",
  },
  [theme.breakpoints.only("xs")]: {
    width: "88vw",
  },
}));

export const StyledInputBase = styled(InputBase)(({ theme }) => ({
  color: "inherit",
  "& .MuiInputBase-input": {
    padding: theme.spacing(1, 1, 1, 0),
    paddingLeft: `calc(1em + ${theme.spacing(4)})`,
    transition: theme.transitions.create("width"),
    width: "100%",
    [theme.breakpoints.up("md")]: {
      width: "40ch",
    },
  },
}));

export const Search = styled("div")(({ theme }) => ({
  position: "relative",
  borderRadius: theme.shape.borderRadius,
  backgroundColor: alpha(theme.palette.common.white, 0.15),
  "&:hover": {
    backgroundColor: alpha(theme.palette.common.white, 0.25),
  },
  marginRight: theme.spacing(2),
  marginLeft: 0,
  width: "100%",
  [theme.breakpoints.up("sm")]: {
    marginLeft: theme.spacing(3),
    width: "auto",
  },
}));

export const AdminIconButton = styled(IconButton)<StyledIconButtonProps>(
  ({ open }) => ({
    marginRight: 20,
    display: open ? "none" : "initial",
  })
);

export const StyledListItemIcon = styled(ListItemIcon)<StyledListItemIconProps>(
  ({ open }) => ({
    minWidth: 0,
    marginRight: open ? 24 : "auto",
    justifyContent: "center",
  })
);

export const DashboardTypography = styled(Typography)(({ theme }) => ({
  [theme.breakpoints.only("xs")]: {
    display: "none",
  },
}));

export const IconsBox = styled(Box)(({ theme }) => ({
  display: "flex",
  [theme.breakpoints.down("md")]: {
    display: "none",
  },
}));

export const ShowMoreBox = styled(Box)(({ theme }) => ({
  display: "none",
  [theme.breakpoints.down("md")]: {
    display: "flex",
  },
}));

export const FlexGrowBox = styled(Box)({
  flexGrow: 1,
});

export const StyledBadge = styled(Badge)(({ theme }) => ({
  "& .MuiBadge-badge": {
    backgroundColor: theme.palette.error.main,
    color: theme.palette.common.white,
  },
}));

export const AdminSectionsContainer = styled(Box)({
  marginTop: 20,
  paddingLeft: 40,
  paddingRight: 40,
});
