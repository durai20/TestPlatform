import React, { useState } from "react";
import Card from "@mui/material/Card";
import MDBox from "components/MDBox";
import MDTypography from "components/MDTypography";
import MDInput from "components/MDInput";
import MDButton from "components/MDButton";
import Stack from '@mui/material/Stack';
// Authentication layout components
import BasicLayout from "layouts/authentication/components/BasicLayout";
import { useSession } from " SessionContext";
// Images
import bgImage from "assets/images/bg-sign-in-basic.jpeg";
import { Tabs, Tab, Divider } from '@mui/material';
import { useNavigate } from "react-router-dom";
function Basic() {
  const navigate = useNavigate();
  const [tabIndex, setTabIndex] = useState(0);
  const { name, setName, pass, setPass } = useSession();
  const [email, setEmail] = useState(""); // State for storing email
const [password, setPassword] = useState(""); // State for storing password

  const handleChangeTab = (event, newValue) => {
    setTabIndex(newValue);
  };
  const handleSignIn = async () => {
    let loginData = {};
  
    try {
      if (tabIndex === 0) {
        // Admin login data
        loginData = {
          uname: name,
          pass: pass
        };
      } else if (tabIndex === 1) {
        // Employee login data
        loginData = {
          email: email, // Assuming you have an email state for the employee login
          password: password // Assuming you have a password state for the employee login
        };
      }
  
      let apiUrl = ""; // Initialize API URL variable
      let dashboardRoute = ""; // Initialize dashboard route variable
  
      // Determine API URL and dashboard route based on the selected tab
      if (tabIndex === 0) {
      
        apiUrl = "http://localhost:5001/admin/login";
         // API endpoint for admin sign-in
        dashboardRoute = "/dashboard"; // Route for admin dashboard
      } else if (tabIndex === 1) {
       
        apiUrl = "http://localhost:5001/employee/login"; // API endpoint for employee sign-in'
       
        dashboardRoute = "/studentlayouts/profile"; // Route for employee dashboard
      }
  
      const response = await fetch(apiUrl, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify(loginData),
      });
  
      const res = await response.json();
      if (res.success === true) {
        alert(res.message);
        navigate(dashboardRoute); // Redirect to the appropriate dashboard route
      } else {
        alert(res.message);
      }
    } catch (error) {
      console.log(error);
      alert("An error occurred while signing in");
    }
  };
  return (
    
    <BasicLayout image={bgImage}>
  
      <Card>
        <Tabs value={tabIndex} onChange={handleChangeTab}>
          <Tab label="Admin login" />
          <Tab label="Employee Login" />
        </Tabs>
        <Stack spacing={2} alignItems="center" sx={{ marginTop: '20px', width: 'auto' }}>
          {tabIndex === 0 && (
            <>
              <MDBox
                variant="gradient"
                bgColor="info"
                borderRadius="lg"
                coloredShadow="info"
                mx={2}
                mt={-3}
                p={2}
                mb={1}
                textAlign="center"
                sx={{ width: "400px" }}
              >
                <MDTypography variant="h4" fontWeight="medium" color="white" mt={1}>
                  Admin sign in
                </MDTypography>
                {/* <Grid container spacing={3} justifyContent="center" sx={{ mt: 1, mb: 2 }}>
                  <Grid item xs={2}>
                    <MDTypography component={MuiLink} href="#" variant="body1" color="white">
                      <FacebookIcon color="inherit" />
                    </MDTypography>
                  </Grid>
                  <Grid item xs={2}>
                    <MDTypography component={MuiLink} href="#" variant="body1" color="white">
                      <GitHubIcon color="inherit" />
                    </MDTypography>
                  </Grid>
                  <Grid item xs={2}>
                    <MDTypography component={MuiLink} href="#" variant="body1" color="white">
                      <GoogleIcon color="inherit" />
                    </MDTypography>
                  </Grid>
                </Grid> */}
              </MDBox>
              <MDBox pt={4} pb={3} px={3} sx={{ width: "400px" }}>
                <MDBox component="form" role="form">
                  <MDBox mb={2}>
                    <MDInput type="text" label="Admin username" onChange={(e) =>
                      setName(e.target.value)
                    } fullWidth />
                  </MDBox>
                  <MDBox mb={2}>
                    <MDInput type="password" label="Admin Password" onChange={(e) =>
                      setPass(e.target.value)
                    } fullWidth />
                  </MDBox>
                  <MDBox mt={4} mb={1}>
                    <MDButton variant="gradient" color="info" fullWidth onClick={handleSignIn}>
                      sign in
                    </MDButton>
                  </MDBox>
                  {/* <MDBox mt={3} mb={1} textAlign="center">
                    <MDTypography variant="button" color="text">
                      Don&apos;t have an account?{" "}
                      <MDTypography
                        component={Link}
                        to="/authentication/sign-up"
                        variant="button"
                        color="info"
                        fontWeight="medium"
                        textGradient
                      >
                        Sign up
                      </MDTypography>
                    </MDTypography>
                  </MDBox> */}
                </MDBox>
              </MDBox>
            </>

          )}
          {tabIndex === 1 && (
  <>
    {/* Employee Sign in */}
    <MDBox
      variant="gradient"
      bgColor="info"
      borderRadius="lg"
      coloredShadow="info"
      mx={2}
      mt={-3}
      p={2}
      mb={1}
      textAlign="center"
      sx={{ width: "400px" }}
    >
      <MDTypography variant="h4" fontWeight="medium" color="white" mt={1}>
        Employee Sign in
      </MDTypography>
    </MDBox>
    <MDBox pt={4} pb={3} px={3} sx={{ width: "400px" }}>
      <MDBox component="form" role="form">
        <MDBox mb={2}>
          <MDInput type="email" label="Email" fullWidth onChange={(e) => setEmail(e.target.value)}/>
        </MDBox>
        <MDBox mb={2}>
          <MDInput type="password" label="Password" fullWidth onChange={(e) => setPassword(e.target.value)}/>
        </MDBox>
        <MDBox mt={4} mb={1}>
          <MDButton variant="gradient" color="info" fullWidth onClick={handleSignIn}>
            sign in
          </MDButton>
        </MDBox>
      </MDBox>
    </MDBox>
  </>
)}
        </Stack>

      </Card>
    </BasicLayout>
  );
}

export default Basic;
