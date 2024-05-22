import Grid from "@mui/material/Grid";
import Card from "@mui/material/Card";
import Box from '@mui/material/Box';
import MDBox from "components/MDBox";
import MDTypography from "components/MDTypography";
import { Autocomplete } from "@mui/material";
import React from "react";
import DashboardLayout from "examples/LayoutContainers/DashboardLayout";
import Footer from "examples/Footer";
import { useState } from 'react';
import DataTable from "examples/Tables/DataTable";
// Data
import MDButton from "components/MDButton";
//modal
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import TextField from '@mui/material/TextField';
import { useNavigate } from 'react-router-dom';
import { useSession } from " SessionContext";
import { useEffect } from "react";
function Student() {
  const { name, pass } = useSession();
  const [modal, setModal] = useState(false)
  const handleClose = () => setModal(false)
  const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(10);
  const navigate = useNavigate();
  const [editModalOpen, setEditModalOpen] = useState(false);
  const [isAsc, setIsAsc] = useState(true);
  const [emailError, setEmailError] = useState("");
  const [phoneError, setPhoneError] = useState("");
  // const [departmentEmployeeIds, setDepartmentEmployeeIds] = useState({});
const [editFormData, setEditFormData] = useState({
  id: null,
  name: "",
  email: "",
  password:"",
  phone: "",
  position: "",
  department: "",
  gender: "",
  address: "",
  maritalStatus: "",
  dateOfJoining: "",
  age: ""
});

const handleEditOpen = (data) => {
  setEditFormData(data);
  setEditModalOpen(true);
};

const handleEditClose = () => {
  setEditModalOpen(false);
};

const positionOptions = ["HOD", "Assistant Professor", "Lab Assistant"];
const departmentOptions = ["CSE", "ECE","Placement","EEE","Civil","Mechanical","Admission","HR","IT","Freshers"];
const genderOptions = ["Male","Female","Others"];
const maritalOptions = ["Married","UnMarried"];


const [formData, setFormData] = useState({
  id: null,
  name: "", // Employee name
  email: "", // Employee email
  password: "", // Employee password
  phone: "", // Employee phone
  position: "", // Employee position
  department: "", // Employee department
  employeeId: "" ,// Employee ID
  // profilePicture: "", 
  dateOfJoining: "",
  address: "",
  gender: "",
  maritalStatus: "",
  age: ""
});

const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  const phoneRegex = /^\d{10}$/;

  const capitalizeFirstLetter = (str) => {
    return str.toUpperCase();
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    // For name field, capitalize the first letter
    if (name === "name") {
      setFormData({ ...formData, [name]: capitalizeFirstLetter(value) });
    }
    // else if (name === "department") {
    //   // Extract the first three characters of the department name
    //   const deptCode = value.substring(0, 3).toUpperCase();
    //   // Generate the employee ID
    //   let employeeId;
    //   if (departmentEmployeeIds[value] && departmentEmployeeIds[value].length > 0) {
    //     // If there are existing IDs for the department, find the highest number and increment it
    //     const lastId = Math.max(...departmentEmployeeIds[value].map(id => parseInt(id.substring(4))));
    //     const nextIdNumber = lastId + 1;
    //     employeeId = `${deptCode}-${String(nextIdNumber).padStart(3, '0')}`;
    //   } else {
    //     // If there are no existing IDs for the department, start with a default number
    //     employeeId = `${deptCode}-001`;
    //   }
    //   setFormData({ ...formData, [name]: value, employeeId: employeeId });
    // }
     else {
      setFormData({ ...formData, [name]: value });
    }
  };

  const handleInputChanges = (e) => {
    const { name, value } = e.target;
    // For name field, capitalize the first letter
    if (name === "name") {
      setEditFormData({ ...editFormData, [name]: capitalizeFirstLetter(value) });
    } else {
      setEditFormData({ ...editFormData, [name]: value });
    }
  };

  // const handleFileInputChange = (e, fieldName) => {
  //   const file = e.target.files[0];
  //   if (file) {
  //     if (!['image/jpeg', 'image/png'].includes(file.type)) {
  //       alert('Only JPEG, JPG, and PNG files are allowed.');
  //       return;
  //     }
  //     setFormData({ ...formData, [fieldName]: file });
  //   }
  // };
  
  
  const [studenTableData, setStudentTableData] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(`http://localhost:5001/employeeData`);
        const jsonData = await response.json();
        setStudentTableData(jsonData);
      } catch (error) {
        console.error('Error fetching employee data:', error);
      }
    };
    fetchData();
  }, []);

  const handleDelete = async (id) => {
    try {
      const response = await fetch(`http://localhost:5001/deleteEmployee/${id}`, {
        method: "DELETE",
      });
      const result = await response.json();
      alert("Employee deleted successfully");
      // Fetch data again or update local state if needed
    } catch (error) {
      console.log(error);
    }
  };
  
  const handleSubmit = async () => {

    setEmailError("");
    setPhoneError("");

    if (
      formData.employeeId === "" ||
      formData.name === "" ||
      formData.email === "" ||
      formData.password === "" ||
      formData.phone === "" ||
      formData.position === "" ||
      formData.gender === "" ||
      formData.maritalStatus === "" ||
      // formData.profilePicture === "" ||
      formData.address === "" ||
      formData.age === "" ||
      formData.dateOfJoining === "" ||
      formData.department === ""
    ) {
      alert("Please fill out all required fields.");
      return;
    }

    if (!emailRegex.test(formData.email)) {
      setEmailError("Invalid email format");
      return;
    }

    if (!phoneRegex.test(formData.phone)) {
      setPhoneError("The phone number must be 10 digit");
      return;
    }

    try {
      const response = await fetch(`http://localhost:5001/employeeInsert`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify(formData),
      });
      const result = await response.json();
      alert("Employee added successfully");
      setModal(false);
      // Fetch data again or update local state if needed
    } catch (error) {
      console.log(error);
    }
  };

  const handleSort = () => {
    const sortedData = [...studenTableData];
    sortedData.sort((a, b) => {
      if (a.department < b.department) return -1;
      if (a.department > b.department) return 1;
      return 0;
    });
  
    if (isAsc) {
      setStudentTableData(sortedData);
    } else {
      setStudentTableData(sortedData.reverse());
    }
  
    setIsAsc(!isAsc);
  };
  

  const handleOpen = () => {
    setModal(true);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(+event.target.value);
    setPage(0);
  };

  const handleEditSubmit = async () => {

    setEmailError("");
    setPhoneError("");

    if (
      editFormData.employeeId === "" ||
      editFormData.name === "" ||
      editFormData.password === "" ||
      editFormData.email === "" ||
      editFormData.password === "" ||
      editFormData.phone === "" ||
      editFormData.position === "" ||
      editFormData.department === "" ||
      editFormData.gender === "" ||
      editFormData.maritalStatus === "" ||
      editFormData.age === "" ||
      editFormData.address === "" ||
      editFormData.dateOfJoining === "" 
    ) {
      alert("Please fill out all required fields.");
      return;
    }

    if (!emailRegex.test(editFormData.email)) {
      setEmailError("Invalid email format");
      return;
    }

    if (!phoneRegex.test(editFormData.phone)) {
      setPhoneError("Invalid phone number format");
      return;
    }

    try {
      const response = await fetch(`http://localhost:5001/updateEmployee`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify(editFormData), // Send editFormData directly
      });
      const result = await response.json();
      // Update the local state or fetch data again if needed
      // Close the edit modal
      setEditModalOpen(false);
    } catch (error) {
      console.log(error);
    }
  };
  
  const columns = [
    { Header: "SI.No", accessor: "SI_NO", align: "left" },
    { Header: "ID", accessor: "employeeId", align: "left" },
    { Header: "Name", accessor: "Name", align: "left" },
    { Header: "Email", accessor: "email", align: "left" },
    { Header: "phone", accessor: "phone", align: "left" },
    { Header: "Position", accessor: "Position", align: "left" },
    { 
      Header: () => (
        <div style={{ display: 'flex', alignItems: 'left', cursor: 'pointer' }} onClick={handleSort}>
          <span style={{ fontSize: '1.2em' }}>Department</span>
          {isAsc ? <span style={{ fontSize: '1.6em'}}>&uarr;</span> : <span style={{ fontSize: '1.6em' }}>&darr;</span>}
        </div>
      ),
      accessor: "department",
      align: "left"
    },
    { Header: "action", accessor: "Action", align: "left" },
  ]


  const rows = studenTableData.map((data, index) => ({
    SI_NO: index + 1,
    employeeId:data.empid,
    Name: data.name,
    email: data.email,
    phone: data.phone,
    Position: data.position,
    department: data.department,
    Action: (
      <Box display="flex" justifyContent="space-between">
        <MDButton color="info" onClick={() => handleEditOpen(data)}>
          Edit
        </MDButton>
        <MDButton color="error" onClick={() => handleDelete(data.id)}>
          Delete
        </MDButton>
      </Box>
    ),
  }));
  
  
  return (
    <DashboardLayout>

      <MDBox pt={6} pb={3}>
        <Grid container spacing={6}>
          <Grid item xs={12}>
            <Card>
              <MDBox
                mx={2}
                mt={-3}
                py={3}
                px={2}
                variant="gradient"
                bgColor="info"
                borderRadius="lg"
                coloredShadow="info"
                display="flex"
                justifyContent="space-between" // To space elements evenly
                alignItems="center" // Align items vertically
              >
                <Dialog maxWidth="md" open={modal} justifyContent="center" onClose={handleClose} PaperProps={{
    style: {
      width: '600px', // Set desired width
      height: '500px' // Set desired height
    },
  }} >
                <DialogTitle>Employee Details</DialogTitle>
<DialogContent>
  <DialogContentText>
  <Box mb={2}>
  <Autocomplete
    id="employee-department"
    options={departmentOptions}
    renderInput={(params) => <TextField {...params} label="Department" variant="outlined" />}
    value={formData.department}
    onChange={(event, newValue) => setFormData({ ...formData, department: newValue })}
    fullWidth
    required
  />
</Box>
<Box mb={2}>
<Autocomplete
    id="employee-position"
    options={positionOptions}
    renderInput={(params) => <TextField {...params} label="Position" variant="outlined" />}
    value={formData.position}
    onChange={(event, newValue) => setFormData({ ...formData, position: newValue })}
    fullWidth
    required
  />
</Box>
  <Box mb={2} mt={2}>
  <TextField
        id="employee-id"
        label="Employee ID"
        name="employeeId"
        value={formData.employeeId}
        onChange={handleInputChange}
        variant="outlined"
        fullWidth
        required
      />
  </Box>
  <Box mb={2} mt={2}>
  <TextField
        id="employee-name"
        label="Name"
        name="name"
        value={formData.name}
        onChange={handleInputChange}
        variant="outlined"
        fullWidth
        required
      />
    </Box>
    <Box mb={2}>
    <TextField
        id="employee-email"
        label="Email"
        name="email"
        value={formData.email}
        onChange={handleInputChange}
        variant="outlined"
        fullWidth
        error={!!emailError}
        helperText={emailError}
        required
      />
    </Box>
    <Box mb={2}>
    <TextField
      id="employee-password"
      label="Password"
      type="password"
      value={formData.password}
      onChange={(e) =>
        setFormData({ ...formData, password: e.target.value })
      }
      variant="outlined"
      fullWidth
      required
    />
    </Box>
    <Box mb={2}>
    <TextField
        id="employee-phone"
        label="Phone"
        name="phone"
        value={formData.phone}
        onChange={handleInputChange}
        variant="outlined"
        fullWidth
        error={!!phoneError}
        helperText={phoneError}
        required
      />
    </Box>
    {/* <Box mb={2} style={{ position: 'relative' }}>
  <input
    accept="image/jpeg, image/png"
    id="profile-picture"
    type="file"
    name="profilePicture"
    style={{ display: 'none' }}
    onChange={(e) => handleFileInputChange(e, 'profilePicture')}
  />
  <TextField
    id="profile-picture-textfield"
    label="Profile Picture"
    name="profilePicture"
    variant="outlined"

    fullWidth
    value={formData.profilePicture ? formData.profilePicture.name : ''}
    InputProps={{
      readOnly: true,
    }}
  />
  <label htmlFor="profile-picture" style={{ position: 'absolute', right: '0', top: '50%', transform: 'translateY(-50%)' }}>
    <MDButton component="span" color="info" style={{ height: '20px' }}>
      Upload
    </MDButton>
  </label>
</Box> */}


<Box mb={2}>
<TextField
  id="date-of-joining"
  label="Date of Joining"
  name="dateOfJoining"
  type="date" 
  value={formData.dateOfJoining}
  onChange={handleInputChange}
  variant="outlined"
  fullWidth
  required
  InputLabelProps={{ shrink: true }}
/>
</Box>
<Box mb={2}>
<TextField
  id="employee-address"
  label="Address"
  name="address"
  value={formData.address}
  onChange={handleInputChange}
  variant="outlined"
  fullWidth
  required
  // Add any additional props or validations here
/>
</Box>
<Box mb={2}>
<TextField
  id="employee-age"
  label="Age"
  name="age"
  value={formData.age}
  onChange={handleInputChange}
  variant="outlined"
  fullWidth
  required
  // Add any additional props or validations here
/>
</Box>
<Box mb={2}>
  <Autocomplete
    id="employee-marital"
    options={maritalOptions}
    renderInput={(params) => <TextField {...params} label="Marital-Status" variant="outlined" />}
    value={formData.maritalStatus}
    onChange={(event, newValue) => setFormData({ ...formData, maritalStatus: newValue })}
    fullWidth
    required
  />
</Box>
<Box mb={2}>
  <Autocomplete
    id="employee-gender"
    options={genderOptions}
    renderInput={(params) => <TextField {...params} label="Gender" variant="outlined" />}
    value={formData.gender}
    onChange={(event, newValue) => setFormData({ ...formData, gender: newValue })}
    fullWidth
    required
  />
</Box>

  </DialogContentText>
</DialogContent>

                  <DialogActions>
                    <MDButton onClick={handleClose} color="primary">
                      Cancel
                    </MDButton>
                    <MDButton onClick={handleSubmit} color="primary" autoFocus>
                      Save
                    </MDButton>
                  </DialogActions>
                </Dialog>
                <Dialog maxWidth="md" open={editModalOpen} onClose={handleEditClose}  PaperProps={{
    style: {
      width: '600px', // Set desired width
      height: '500px' // Set desired height
    },
  }}>
  <DialogTitle>Edit Employee Details</DialogTitle>
  <DialogContent>
    <DialogContentText>
    <Box mb={2} mt={2}>
            <TextField
              id="edit-name"
              label="Name"
              value={editFormData.name}
              onChange={(e) =>
                setEditFormData({ ...editFormData, name: capitalizeFirstLetter(e.target.value) }) // Capitalize first letter
              }
              variant="outlined"
              fullWidth
              required
            />
      </Box>
    
      <Box mb={2}>
      <TextField
        id="edit-email"
        label="Email"
        name="email"
        value={editFormData.email}
        onChange={handleInputChanges}
        variant="outlined"
        fullWidth
        error={!!emailError}
        helperText={emailError}
        required
      />
      </Box>
      <Box mb={2}>
      <TextField
        id="edit-password"
        label="Password"
        name="password"
        value={editFormData.password}
        onChange={handleInputChanges}
        variant="outlined"
        fullWidth

        required
      />
      </Box>
      <Box mb={2}>
      <TextField
        id="edit-phone"
        label="Phone"
        name="phone"
        value={editFormData.phone}
        onChange={handleInputChanges}
        variant="outlined"
        fullWidth
        error={!!phoneError}
        helperText={phoneError}
        required
      />
      </Box>
      <Box mb={2}>
  <Autocomplete
    id="edit-position"
    options={positionOptions}
    value={editFormData.position}
    required
    onChange={(event, newValue) =>
      setEditFormData({ ...editFormData, position: newValue })
    }
    renderInput={(params) => (
      <TextField {...params} label="Position" variant="outlined" fullWidth />
      
    )}
  />
</Box>
<Box mb={2}>
  <Autocomplete
    id="edit-department"
    options={departmentOptions}
    value={editFormData.department}
    required
    onChange={(event, newValue) =>
      setEditFormData({ ...editFormData, department: newValue })
    }
    renderInput={(params) => (
      <TextField {...params} label="Department" variant="outlined" fullWidth />
    )}
  />
</Box>
<Box mb={2}>
      <TextField
        id="edit-age"
        label="Age"
        name="age"
        value={editFormData.age}
        onChange={handleInputChanges}
        variant="outlined"
        fullWidth
        required
      />
      </Box>
      <Box mb={2}>
      <TextField
        id="edit-address"
        label="Address"
        name="address"
        value={editFormData.address}
        onChange={handleInputChanges}
        variant="outlined"
        fullWidth
        required
      />
      </Box>     
<Box mb={2}>
  <Autocomplete
    id="edit-gender"
    options={genderOptions}
    value={editFormData.gender}
    required
    onChange={(event, newValue) =>
      setEditFormData({ ...editFormData, gender: newValue })
    }
    renderInput={(params) => (
      <TextField {...params} label="Gender" variant="outlined" fullWidth />
    )}
  />
</Box>

<Box mb={2}>
<Autocomplete
  id="edit-marital"
  options={maritalOptions}
  value={editFormData.maritalStatus} // Set the value prop to editFormData.maritalStatus
  onChange={(event, newValue) =>
    setEditFormData({ ...editFormData, maritalStatus: newValue })
  }
  renderInput={(params) => (
    <TextField {...params} label="Marital-Status" variant="outlined" fullWidth />
  )}
/>

</Box>

    </DialogContentText>
  </DialogContent>
  <DialogActions>
    <MDButton onClick={handleEditClose} color="primary">
      Cancel
    </MDButton>
    <MDButton onClick={handleEditSubmit} color="primary" autoFocus>
      Confirm
    </MDButton>
  </DialogActions>
</Dialog>


                <MDTypography variant="h6" color="white" >
                  Add Employee
                </MDTypography>
                <MDButton color="success" onClick={handleOpen}>
                Add Employee
                </MDButton>
              </MDBox>
              <MDBox pt={3}>
                <MDBox pt={3}>
                  <DataTable
                    table={{ columns, rows }}
                    isSorted={false}
                    entriesPerPage={true}
                    showTotalEntries={true}
                    noEndBorder
                  />
                </MDBox>
              </MDBox>
            </Card>

          </Grid>
        </Grid>
      </MDBox>
      
      <Footer />
    </DashboardLayout>
  );
}

export default Student;

