import Dashboard from "layouts/dashboard";
import Profile from "layouts/studentlayouts/profile";
import SignIn from "layouts/authentication/sign-in";
import Icon from "@mui/material/Icon";
import Student from "layouts/student";
import StudentDashboard from "layouts/studentlayouts/dashboard";

// const handleLogout = () => {
//   // Clear session data or perform any other logout actions
//   // For example, you can clear localStorage or sessionStorage
//   localStorage.removeItem("token"); // Assuming you're using a token for authentication
  
//   // Redirect the user to the login page
//   window.location.href = "layouts/authentication/sign-in";
// };

const routes = [
  {
    type: "collapse",
    name: "Dashboard",
    key: "dashboard",
    icon: <Icon fontSize="small">dashboard</Icon>,
    route: "/dashboard",
    component: <Dashboard />,
    role:"admin",
  },
  // {
  //   type: "collapse",
  //   name: "Dashboard",
  //   key: "studentDash",
  //   icon: <Icon fontSize="small">dashboard</Icon>,
  //   route: "/studenDashboard",
  //   component: < StudentDashboard/>,
  //   role:"employee"
  // },
  // {
  //   type: "collapse",
  //   name: "Socratease Quizzes",
  //   key: "tables",
  //   icon: <Icon fontSize="small">table_view</Icon>,
  //   route: "/Quizzes",
  //   component: <Quizzes />,
  // },
  // {
  //   type: "collapse",
  //   name: "Billing",
  //   key: "billing",
  //   icon: <Icon fontSize="small">receipt_long</Icon>,
  //   route: "/billing",
  //   component: <Billing />,
  // },
 
  {
    type: "collapse",
    name: "Profile",
    key: "profile",
    icon: <Icon fontSize="small">person</Icon>,
    route: "/studentlayouts/profile",
    component: <Profile />,
    role:"employee",
  },
  // {
  //   type: "collapse",
  //   name: "result",
  //   key: "result",
  //   icon: <Icon fontSize="small">person</Icon>,
  //   route: "/results",
  //   component: <Result />,
  // },
  // {
  //   type: "collapse",
  //   name: "Usage",
  //   key: "usage",
  //   icon: <Icon fontSize="small">circle</Icon>,
  //   route: "/Usage",
  //   component: <Usage />,
  // },
  // {
  //   type: "hide",
  //   name: "DrData",
  //   key: "usage",
  //   icon: <Icon fontSize="small">circle</Icon>,
  //   route: "/DRdata",
  //   component: <DetailedResultData />,
  // },
  // {
  //   type: "hide",
  //   name: "individual",
  //   key: "usage",
  //   icon: <Icon fontSize="small">student</Icon>,
  //   route: "/IndividualScore",
  //   component: <Individual />,
  // },
  {
    type: "collapse",
    name: "Add Employee",
    key: "student",
    icon: <Icon fontSize="small">add person</Icon>,
    route: "/student",
    component: <Student/>,
    role:"admin",
  },
  // {
  //   type: "collapse",
  //   name: "create test",
  //   key: "test",
  //   icon:<Icon fontSize="small">note_add</Icon>,
  //   route: "/TestCreate",
  //   component: <Test/>,
  // },
  {
    type: "collapse",
    name: "Logout",
    key: "sign-in",
    icon:<Icon fontSize="small">exit_to_app</Icon>,
    route: "/sign-in",
    component: <SignIn/>,
  }
  // {
  //   type: "collapse", // Hide from sidebar navigation
  //   name: "Sign Out", // Display name for the logout option
  //   key: "sign-out", // Unique key for the logout option
  //   icon: <Icon fontSize="small">exit_to_app</Icon>, // Logout icon
  //   onClick: handleLogout, // Function to handle logout action
  // },
  
];

export default routes;
