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
import { Link } from "react-router-dom";
import Account from "./Dashboard";
import SchoolIcon from "@mui/icons-material/School";
import PeopleAltIcon from "@mui/icons-material/PeopleAlt";
import EventAvailableIcon from "@mui/icons-material/EventAvailable";
import StickyNote2Icon from "@mui/icons-material/StickyNote2";
import AssignmentIndIcon from "@mui/icons-material/AssignmentInd";
import GradingIcon from "@mui/icons-material/Grading";
import FilePresentIcon from "@mui/icons-material/FilePresent";
import DashboardIcon from "@mui/icons-material/Dashboard";
import Footer from "../component/Footer";
import TodoListItem from "../component/TodoListItem";
import CalendarMonthIcon from "@mui/icons-material/CalendarMonth";
import DateP from "../component/DateP";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import ShareIcon from '@mui/icons-material/Share';

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

export default function Clases() {
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
        <Box
          sx={{ height: "100%", width: "100%" }}
          style={{ backgroundColor: "#F2F2F2" }}
          component="main"
        >
          <DrawerHeader />
          <Typography className="overflow-hidden">
            <section className="w-full flex justify-between  mt-5 mx-10">
              <div className="mt-1 bg-white ">
                <select className="select select-bordered text-black select-sm w-full ">
                  <option disabled selected>
                    Attendance Overview
                  </option>
                  <option> Attendance Overview </option>
                </select>
              </div>
              <div className="mt-1 bg-white mx-20 ">
                <select className="select select-bordered text-black select-sm w-full  ">
                  <option disabled selected>
                    Class 6A
                  </option>
                  <option>Class 6A</option>
                </select>
              </div>
            </section>

            <section className=" grid md:grid-cols-3 place-items-center md:mx-80 ">
              <div className="card  w-60  bg-base-100 shadow-xl m-5">
                <div className="card-body">
                  <div className="w-full flex justify-center">
                    <h2 className="card-title  font-bold text-5xl">31</h2>
                  </div>
                  <div className="text-sm w-full flex justify-center text-[#818181]">
                    Total Students
                  </div>
                </div>
              </div>
              <div className="card w-60   bg-base-100 shadow-xl m-5">
                <div className="card-body">
                  <div className="w-full flex justify-center">
                    <h2 className="card-title text-5xl">24</h2>
                  </div>
                  <div className="text-sm w-full flex justify-center text-[#818181]">
                    Present
                  </div>
                </div>
              </div>
              <div className="card w-60   bg-base-100 shadow-xl m-5">
                <div className="card-body">
                  <div className="w-full flex justify-center">
                    <h2 className="card-title text-5xl">7</h2>
                  </div>
                  <div className="text-sm w-full flex justify-center text-[#818181]">
                    Absent
                  </div>
                </div>
              </div>
            </section>

            <section className="w-full grid md:grid-cols-2 place-items-center  my-3">
              <div className="card w-96 bg-base-100 shadow-xl ">
                <div className="card-body">
                  <h2 className="card-title">Todo - list</h2>
                  <div className="text-sm text-[#818181]">22 January</div>
                  {/* <DateP></DateP> */}
                  <TodoListItem></TodoListItem>
                </div>
                <div className="text-sm mx-3 flex justify-end font-semibold my-2">
                  View All
                </div>
              </div>

              <div className="card w-100 mt-4  bg-base-100 shadow-xl md:mr-10 md:w-full ">
                <div className="card-body">
                  <div className="flex justify-between w-full">
                    <h2 className="card-title">My Schedule</h2>
                    <div className="text-sm text-[#818181]">
                      <CalendarMonthIcon></CalendarMonthIcon>
                    </div>
                  </div>

                  <section className="w-full grid md:grid-cols-3 place-items-center  ">
                    <div className="card  w-60  bg-base-100 shadow-xl m-3">
                      <div className="card-body">
                        <div className="text-sm w-full flex justify-center text-[#818181]">
                          9am -9:45pm
                        </div>
                      </div>
                    </div>
                    <div className="card w-60   bg-base-100 shadow-xl m-3 ">
                      <div className="card-body">
                        <div className="text-sm w-full flex justify-center text-[#818181]">
                          English Class With with 7A
                        </div>
                      </div>
                    </div>
                    <div className="w-60   bg-base-100  m-5 ">
                      <div className="flex justify-end">
                        <button className="btn btn-outline">Start Class</button>
                      </div>
                    </div>
                  </section>
                </div>
                <div className="text-sm mx-3 flex justify-end font-semibold my-2">
                  View All
                </div>
              </div>
            </section>
            <section className="w-full grid md:grid-cols-2 place-items-center  my-3">
              <div className="card w-100 mt-4  bg-base-100 shadow-xl md:ml-10 md:w-full ">
                <div className="card-body">
                  <div className="flex justify-between w-full">
                    <h2 className="card-title">Student Performance</h2>
                  </div>
                  <section className="w-full flex justify-between  mt-5 mx-10">
                  <div className="mt-1 bg-white ">
                      <select className="select select-bordered text-black select-sm w-full ">
                        <option disabled selected>
                          Section B
                        </option>
                        <option>Class 6A</option>
                      </select>
                    </div>
                    <div className="mt-1 bg-white ">
                      <select className="select select-bordered text-black select-sm w-full ">
                        <option disabled selected>
                          Class 6A
                        </option>
                        <option>Class 6A</option>
                      </select>
                    </div>
                    <div className="mt-1 bg-white mx-10 ">
                      <select className="select select-bordered text-black select-sm  ">
                        <option disabled selected>
                          Below 50%
                        </option>
                        <option> Attendance Overview </option>
                      </select>
                    </div>
                   
                  </section>
                 
                  <section className="w-full  ">
                    <div className="card  w-full  bg-base-100 shadow-xl m-3">
                      <div className="card-body w-full  ">
                        <section className="grid border-2 p-3 rounded-lg md:grid-cols-3 place-items-center "> 
                        <div className="avatar flex justify-end">
                          <div className="w-18 rounded-full">
                            <img src="https://avatars.githubusercontent.com/u/85506845?v=4" />
                            
                          </div>
                        </div>
                        <div className="text-sm text-[#818181] font-bold">Goodluck</div>
                        <div className="text-sm text-[#818181] font-bold">45%</div>
                        
                        </section>
                      </div>
                    </div>
                  </section>
                </div>
                <div className="text-sm mx-3 flex justify-end font-semibold my-2">
                  View All
                </div>
              </div>
              <div className="card w-96 mt-3  bg-base-100 shadow-xl ">
                <div className="card-body">
                  <h2 className="card-title">Student Material</h2>
                  <div className="text-sm text-[#818181]">22 January</div>
                  {/* <DateP></DateP> */}
                  <section className="w-full flex justify-between  mt-5 ">
                  <div className="mt-1 bg-white ">
                      <select className="select select-bordered text-black select-sm w-full ">
                        <option disabled selected>
                          Section B
                        </option>
                        <option>Class 6A</option>
                      </select>
                    </div>
                    <div className="mt-1 bg-white ">
                      <select className="select select-bordered text-black select-sm w-full ">
                        <option disabled selected>
                          Class 6A
                        </option>
                        <option>Class 6A</option>
                      </select>
                    </div>
                   
                  
                   
                  </section>
                  <section className="grid border-2 p-3 rounded-lg md:grid-cols-2 place-items-center  "> 
                      
                      <div className="text-sm text-[#818181] font-bold ">Goodluck Travel Plan</div>
                      <div className="text-sm text-[#818181] font-bold w-full flex justify-end"><ShareIcon></ShareIcon></div>
                      
                      </section>
                </div>
                <div className="text-sm mx-3 flex justify-end font-semibold my-2">
                  View All
                </div>
              </div>
            </section>
          </Typography>
        </Box>
      </Box>
    </ThemeProvider>
  );
}
