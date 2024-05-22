import Grid from "@mui/material/Grid";
import MDBox from "components/MDBox";
import DashboardLayout from "examples/LayoutContainers/DashboardLayout";
import Footer from "examples/Footer";
import ComplexStatisticsCard from "examples/Cards/StatisticsCards/ComplexStatisticsCard";
import React, { useState, useEffect } from "react";
// Dashboard components

import { useSession } from " SessionContext";

function Dashboard() {
  const {name,pass}=useSession();
  const [totalEmployeeCount, setTotalEmployeeCount] = useState(0);
  const [totalEmployeeCseCount, setTotalEmployeeCseCount] = useState(0);
  const [totalEmployeeItCount, setTotalEmployeeItCount] = useState(0);
  const [totalEmployeeEceCount, setTotalEmployeeEceCount] = useState(0);
  const [totalEmployeeHrCount, setTotalEmployeeHrCount] = useState(0);
  const [totalEmployeeEeeCount, setTotalEmployeeEeeCount] = useState(0);
  const [totalEmployeeCivilCount, setTotalEmployeeCivilCount] = useState(0);
  const [totalEmployeeMechanicalCount, setTotalEmployeeMechanicalCount] = useState(0);
  const [totalEmployeeAdmissionCount, setTotalEmployeeAdmissionCount] = useState(0);
  const [totalEmployeePlacementCount, setTotalEmployeePlacementCount] = useState(0);
  const [totalEmployeeFreshersCount, setTotalEmployeeFreshersCount] = useState(0);
  const [totalEmployeeMaleCount, setTotalEmployeeMaleCount] = useState(0);
  const [totalEmployeeFemaleCount, setTotalEmployeeFemaleCount] = useState(0);


  const fetchTotalEmployeeCount = async () => {
    try {
      const response = await fetch("http://localhost:5001/totalEmployeeCount");
      const result = await response.json();

      if (result && result.length > 0) {
        const totalEmployeeCount = result[0].totalEmployeeCount;
        setTotalEmployeeCount(totalEmployeeCount);
      } else {
        console.error("Invalid data structure received from the server:", result);
      }
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };
  const fetchTotalEmployeeCseCount = async () => {
    try {
      const response = await fetch("http://localhost:5001/totalEmployeeCseCount");
      const result = await response.json();

      if (result && result.length > 0) {
        const totalEmployeeCseCount = result[0].totalEmployeeCseCount;
        setTotalEmployeeCseCount(totalEmployeeCseCount);
      } else {
        console.error("Invalid data structure received from the server:", result);
      }
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  }; 

  const fetchTotalEmployeeEceCount = async () => {
    try {
      const response = await fetch("http://localhost:5001/totalEmployeeEceCount");
      const result = await response.json();

      if (result && result.length > 0) {
        const totalEmployeeEceCount = result[0].totalEmployeeEceCount;
        setTotalEmployeeEceCount(totalEmployeeEceCount);
      } else {
        console.error("Invalid data structure received from the server:", result);
      }
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };
  const fetchTotalEmployeeEeeCount = async () => {
    try {
      const response = await fetch("http://localhost:5001/totalEmployeeEeeCount");
      const result = await response.json();

      if (result && result.length > 0) {
        const totalEmployeeEeeCount = result[0].totalEmployeeEeeCount;
        setTotalEmployeeEeeCount(totalEmployeeEeeCount);
      } else {
        console.error("Invalid data structure received from the server:", result);
      }
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  const fetchTotalEmployeeItCount = async () => {
    try {
      const response = await fetch("http://localhost:5001/totalEmployeeItCount");
      const result = await response.json();

      if (result && result.length > 0) {
        const totalEmployeeItCount = result[0].totalEmployeeItCount;
        setTotalEmployeeItCount(totalEmployeeItCount);
      } else {
        console.error("Invalid data structure received from the server:", result);
      }
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };
  const fetchTotalEmployeeCivilCount = async () => {
    try {
      const response = await fetch("http://localhost:5001/totalEmployeeCivilCount");
      const result = await response.json();

      if (result && result.length > 0) {
        const totalEmployeeCivilCount = result[0].totalEmployeeCivilCount;
        setTotalEmployeeCivilCount(totalEmployeeCivilCount);
      } else {
        console.error("Invalid data structure received from the server:", result);
      }
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };
  const fetchTotalEmployeeHrCount = async () => {
    try {
      const response = await fetch("http://localhost:5001/totalEmployeeHrCount");
      const result = await response.json();

      if (result && result.length > 0) {
        const totalEmployeeHrCount = result[0].totalEmployeeHrCount;
        setTotalEmployeeHrCount(totalEmployeeHrCount);
      } else {
        console.error("Invalid data structure received from the server:", result);
      }
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };
  const fetchTotalEmployeeAdmissionCount = async () => {
    try {
      const response = await fetch("http://localhost:5001/totalEmployeeAdmissionCount");
      const result = await response.json();

      if (result && result.length > 0) {
        const totalEmployeeAdmissionCount = result[0].totalEmployeeAdmissionCount;
        setTotalEmployeeAdmissionCount(totalEmployeeAdmissionCount);
      }  
      else {
        console.error("Invalid data structure received from the server:", result);
      }
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };
      const fetchTotalEmployeeFreshersCount = async () => {
        try {
          const response = await fetch("http://localhost:5001/totalEmployeeFreshersCount");
          const result = await response.json();
    
          if (result && result.length > 0) {
            const totalEmployeeFreshersCount = result[0].totalEmployeeFreshersCount;
            setTotalEmployeeFreshersCount(totalEmployeeFreshersCount);
          } else {
            console.error("Invalid data structure received from the server:", result);
          }
        } catch (error) {
          console.error("Error fetching data:", error);
        }
      };
      const fetchTotalEmployeeMechanicalCount = async () => {
        try {
          const response = await fetch("http://localhost:5001/totalEmployeeMechanicalCount");
          const result = await response.json();
    
          if (result && result.length > 0) {
            const totalEmployeeMechanicalCount = result[0].totalEmployeeMechanicalCount;
            setTotalEmployeeMechanicalCount(totalEmployeeMechanicalCount);
          } else {
            console.error("Invalid data structure received from the server:", result);
          }
        } catch (error) {
          console.error("Error fetching data:", error);
        }
      };
      const fetchTotalEmployeePlacementCount = async () => {
        try {
          const response = await fetch("http://localhost:5001/totalEmployeePlacementCount");
          const result = await response.json();
    
          if (result && result.length > 0) {
            const totalEmployeePlacementCount = result[0].totalEmployeePlacementCount;
            setTotalEmployeePlacementCount(totalEmployeePlacementCount);
          } else {
            console.error("Invalid data structure received from the server:", result);
          }
        } catch (error) {
          console.error("Error fetching data:", error);
        }
      };
      const fetchTotalEmployeeMaleCount = async () => {
        try {
          const response = await fetch("http://localhost:5001/totalEmployeeMaleCount");
          const result = await response.json();
    
          if (result && result.length > 0) {
            const totalEmployeeMaleCount = result[0].totalEmployeeMaleCount;
            setTotalEmployeeMaleCount(totalEmployeeMaleCount);
          } else {
            console.error("Invalid data structure received from the server:", result);
          }
        } catch (error) {
          console.error("Error fetching data:", error);
        }
      };
      const fetchTotalEmployeeFemaleCount = async () => {
        try {
          const response = await fetch("http://localhost:5001/totalEmployeeFemaleCount");
          const result = await response.json();
    
          if (result && result.length > 0) {
            const totalEmployeeFemaleCount = result[0].totalEmployeeFemaleCount;
            setTotalEmployeeFemaleCount(totalEmployeeFemaleCount);
          } else {
            console.error("Invalid data structure received from the server:", result);
          }
        } catch (error) {
          console.error("Error fetching data:", error);
        }
      };

  useEffect(() => {
    fetchTotalEmployeeCseCount();
    fetchTotalEmployeeCivilCount();
    fetchTotalEmployeeEceCount();
    fetchTotalEmployeeItCount();
    fetchTotalEmployeeMechanicalCount();
    fetchTotalEmployeeFreshersCount();
    fetchTotalEmployeeAdmissionCount();
    fetchTotalEmployeeEeeCount();
    fetchTotalEmployeePlacementCount();
    fetchTotalEmployeeHrCount();
    fetchTotalEmployeeCount();
    fetchTotalEmployeeMaleCount();
    fetchTotalEmployeeFemaleCount();
  }, []);
 

  return (
    <DashboardLayout>
      <MDBox py={3}>
        {console.log(name,pass)}
        <Grid container spacing={3}>
          <Grid item xs={12} md={6} lg={3}>
            <MDBox mb={1.5}>
              <ComplexStatisticsCard
                color="dark"
                icon="weekend"
                title="Total Employee"
                count={totalEmployeeCount}
                percentage={{
                  color: "success",
                  amount: "",
                  label: "Just updated",
                }}
              />
            </MDBox>
          </Grid>
          <Grid item xs={12} md={6} lg={3}>
            <MDBox mb={1.5}>
              <ComplexStatisticsCard
                color="light"
                icon="man"
                title="Total Male Employee"
                count={totalEmployeeMaleCount}
                percentage={{
                  color: "success",
                  amount: "",
                  label: "Just updated",
                }}
              />
            </MDBox>
          </Grid>
          <Grid item xs={12} md={6} lg={3}>
            <MDBox mb={1.5}>
              <ComplexStatisticsCard
                color="success"
                icon="woman"
                title="Total Female Employee"
                count={totalEmployeeFemaleCount}
                percentage={{
                  color: "success",
                  amount: "",
                  label: "Just updated",
                }}
              />
            </MDBox>
          </Grid>
          <Grid item xs={12} md={6} lg={3}>
            <MDBox mb={1.5}>
              <ComplexStatisticsCard
                icon="engineering"
                title="Total Department"
                count="9"
                percentage={{
                  color: "success",
                  amount: "",
                  label: "Just updated",
                }}
              />
            </MDBox>
          </Grid>
          <Grid item xs={12} md={6} lg={3}>
            <MDBox mb={1.5}>
              <ComplexStatisticsCard
                color="success"
                icon="store"
                title="HR Department"
                count={totalEmployeeHrCount}
                percentage={{
                  color: "success",
                  amount: "",
                  label: "Just updated",
                }}
              />
            </MDBox>
          </Grid>
          <Grid item xs={12} md={6} lg={3}>
            <MDBox mb={1.5}>
              <ComplexStatisticsCard
                color="secondary"
                icon="computer" 
                title="CSE Department"
                count={totalEmployeeCseCount}
                percentage={{
                  color: "success",
                  amount: "",
                  label: "Just updated",
                }}
              />
            </MDBox>
          </Grid>
          <Grid item xs={12} md={6} lg={3}>
            <MDBox mb={1.5}>
              <ComplexStatisticsCard
                color="light"
                icon="home" 
                title="CIVIL Depatement"
                count={totalEmployeeCivilCount}
                percentage={{
                  color: "success",
                  amount: "",
                  label: "Just updated",
                }}
              />
            </MDBox>
          </Grid>
          <Grid item xs={12} md={6} lg={3}>
            <MDBox mb={1.5}>
              <ComplexStatisticsCard
                color="error"
                icon="usb" 
                title="ECE Department"
                count={totalEmployeeEceCount}
                percentage={{
                  color: "success",
                  amount: "",
                  label: "Just updated",
                }}
              />
            </MDBox>
          </Grid>
          <Grid item xs={12} md={6} lg={3}>
            <MDBox mb={1.5}>
              <ComplexStatisticsCard
                color="dark"
                icon="electrical_services" 
                title="EEE Department"
                count={totalEmployeeEeeCount}
                percentage={{
                  color: "success",
                  amount: "",
                  label: "Just updated",
                }}
              />
            </MDBox>
          </Grid>
          <Grid item xs={12} md={6} lg={3}>
            <MDBox mb={1.5}>
              <ComplexStatisticsCard
                color="warning"
                icon="handyman" 
                title="Mechanical Department"
                count={totalEmployeeMechanicalCount}
                percentage={{
                  color: "success",
                  amount: "",
                  label: "Just updated",
                }}
              />
            </MDBox>
          </Grid>
          <Grid item xs={12} md={6} lg={3}>
            <MDBox mb={1.5}>
              <ComplexStatisticsCard
                color="info"
                icon="person_4" 
                title="Freshers Department"
                count={totalEmployeeFreshersCount}
                percentage={{
                  color: "success",
                  amount: "",
                  label: "Just updated",
                }}
              />
            </MDBox>
          </Grid>
          <Grid item xs={12} md={6} lg={3}>
            <MDBox mb={1.5}>
              <ComplexStatisticsCard
                color="info"
                icon="mouse" 
                title="IT Department"
                count={totalEmployeeItCount}
                percentage={{
                  color: "success",
                  amount: "",
                  label: "Just updated",
                }}
              />
            </MDBox>
          </Grid>
          <Grid item xs={12} md={6} lg={3}>
            <MDBox mb={1.5}>
              <ComplexStatisticsCard
                color="success"
                icon="work" 
                title="Placement Department"
                count={totalEmployeePlacementCount}
                percentage={{
                  color: "success",
                  amount: "",
                  label: "Just updated",
                }}
              />
            </MDBox>
          </Grid>
          <Grid item xs={12} md={6} lg={3}>
            <MDBox mb={1.5}>
              <ComplexStatisticsCard
                color="success"
                icon="admin_panel_settings" 
                title="Admission Office"
                count={totalEmployeeAdmissionCount}
                percentage={{
                  color: "success",
                  amount: "",
                  label: "Just updated",
                }}
              />
            </MDBox>
          </Grid>
         
        </Grid>
       </MDBox>
      <Footer />
    </DashboardLayout>
  );
}

export default Dashboard;
