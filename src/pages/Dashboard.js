import * as React from "react";
import { styled, useTheme } from "@mui/material/styles";
import Box from "@mui/material/Box";
import MuiDrawer from "@mui/material/Drawer";
import MuiAppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import List from "@mui/material/List";
import CssBaseline from "@mui/material/CssBaseline";
import Typography from "@mui/material/Typography";
import Divider from "@mui/material/Divider";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import InboxIcon from "@mui/icons-material/MoveToInbox";
import MailIcon from "@mui/icons-material/Mail";
import { ThemeProvider } from "@mui/material/styles";
import { PrimaryMainTheme } from "../styles/PrimaryMainTheme";
import Navbar from "../component/Navbar";
import { MdDashboard } from "react-icons/md";
import DashboardIcon from "@mui/icons-material/Dashboard";
import Teacher from "./Clases";
import { Link } from "react-router-dom";
import SchoolIcon from "@mui/icons-material/School";
import PeopleAltIcon from "@mui/icons-material/PeopleAlt";
import EventAvailableIcon from "@mui/icons-material/EventAvailable";
import StickyNote2Icon from "@mui/icons-material/StickyNote2";
import AssignmentIndIcon from "@mui/icons-material/AssignmentInd";
import GradingIcon from "@mui/icons-material/Grading";
import FilePresentIcon from "@mui/icons-material/FilePresent";

const drawerWidth = 240;

const openedMixin = (theme) => ({
  width: drawerWidth,
  transition: theme.transitions.create("width", {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.enteringScreen,
  }),
  overflowX: "hidden",
});

const closedMixin = (theme) => ({
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

const DrawerHeader = styled("div")(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  justifyContent: "flex-end",
  padding: theme.spacing(0, 1),
  // necessary for content to be below app bar
  ...theme.mixins.toolbar,
}));

const AppBar = styled(MuiAppBar, {
  shouldForwardProp: (prop) => prop !== "open",
})(({ theme, open }) => ({
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

const Drawer = styled(MuiDrawer, {
  shouldForwardProp: (prop) => prop !== "open",
})(({ theme, open }) => ({
  width: drawerWidth,
  flexShrink: 0,
  backgroundColor: "pink",
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

export default function Dashboard() {
  const theme = useTheme();
  const [open, setOpen] = React.useState(false);

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };

  return (
    <ThemeProvider theme={PrimaryMainTheme}>
      <Box sx={{ display: "flex" }}>
        {/* <CssBaseline /> */}
        <AppBar position="fixed" open={open}>
          <Toolbar>
            <IconButton
              color="inherit"
              aria-label="open drawer"
              onClick={handleDrawerOpen}
              edge="start"
              sx={{
                marginRight: 5,
                ...(open && { display: "none" }),
              }}
            >
              <MenuIcon />
            </IconButton>
            <Typography
              variant="h6"
              noWrap
              component="div"
              className=" w-full "
            >
              <Navbar></Navbar>
            </Typography>
          </Toolbar>
        </AppBar>
        <section>
          <Drawer className="navbarcolor" variant="permanent" open={open}>
            <DrawerHeader>
              <IconButton onClick={handleDrawerClose}>
                {theme.direction === "rtl" ? (
                  <ChevronRightIcon />
                ) : (
                  <ChevronLeftIcon />
                )}
              </IconButton>
            </DrawerHeader>
            <Divider />
            <List>
              <Link to="/dashbaord">
                <ListItem button key="Dashboard">
                  <ListItemIcon>{<DashboardIcon></DashboardIcon>}</ListItemIcon>
                  <ListItemText primary="Dashboard" />
                </ListItem>
              </Link>

              <Link to="/clases">
                <ListItem button key="Clases">
                  <ListItemIcon>{<SchoolIcon />}</ListItemIcon>
                  <ListItemText primary="Clases" />
                </ListItem>
              </Link>

              <Link to="/allstudent">
                <ListItem button key="AllStudent">
                  <ListItemIcon>{<PeopleAltIcon />}</ListItemIcon>
                  <ListItemText primary="All Students" />
                </ListItem>
              </Link>

              <Link to="/attendance">
                <ListItem button key="Attendance">
                  <ListItemIcon>{<EventAvailableIcon />}</ListItemIcon>
                  <ListItemText primary="Attendance" />
                </ListItem>
              </Link>
              <Link to="/lessonplan">
                <ListItem button key="lessonplan">
                  <ListItemIcon>{<StickyNote2Icon />}</ListItemIcon>
                  <ListItemText primary="Lesson Plan" />
                </ListItem>
              </Link>
              <Link to="/assingment">
                <ListItem button key="assignment">
                  <ListItemIcon>{<AssignmentIndIcon />}</ListItemIcon>
                  <ListItemText primary="Assignments" />
                </ListItem>
              </Link>
              <Link to="/exams">
                <ListItem button key="exams">
                  <ListItemIcon>{<GradingIcon />}</ListItemIcon>
                  <ListItemText primary="Exams" />
                </ListItem>
              </Link>
              <Link to="/resource">
                <ListItem button key="resource">
                  <ListItemIcon>{<FilePresentIcon />}</ListItemIcon>
                  <ListItemText primary="Resources" />
                </ListItem>
              </Link>
            </List>
            <Divider />
          </Drawer>
        </section>
        <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
          <DrawerHeader />
          <Typography paragraph>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Rhoncus
            Account
          </Typography>
        </Box>
      </Box>
    </ThemeProvider>
  );
}
