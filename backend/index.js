const express = require('express');
const bodyParser = require('body-parser');
const mysql = require('mysql');
const cors = require('cors');
const multer = require('multer');
const xlsx = require('xlsx');
const app = express();
const upload = multer({ dest: 'uploads/' });
app.use(cors())
app.use(express.json());
//db connection
const db = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: '',
  database: 'Proctor_dbs'
});


// table data
app.get('/tableData', async (req, res) => {
  try {
    const mail = req.params.staff_mail;

    const sqlQuerry = 'select * from employee;'
    const value = [mail];
    db.query(sqlQuerry, value, (err, results) => {
      if (err) {
        console.log(err)
        return;
      }
      return res.json(results)
    });

  } catch (error) {
    console.error('Error deleting MCQ question bank:', error);
    return res.status(500).json({ error: 'Internal Server Error' });
  }
});

app.get('/employeeData', (req, res) => {
  const sqlQuery = 'SELECT * FROM employee';
  db.query(sqlQuery, (err, results) => {
    if (err) {
      console.error('Error fetching employee data:', err);
      res.status(500).json({ error: 'Internal Server Error' });
      return;
    }
    res.json(results);
  });
});

app.get('/userInfo', (req, res) => {
  const userEmail = req.query.email; // assuming email is passed as a query parameter
  
  // Query to fetch user info by email
  const query = `SELECT name, position FROM employee WHERE email = ?`;
  
  connection.query(query, [userEmail], (err, results) => {
    if (err) {
      console.error('Error fetching user info from MySQL:', err);
      res.status(500).json({ error: 'Internal server error' });
      return;
    }
    if (results.length === 0) {
      res.status(404).json({ error: 'User not found' });
      return;
    }
    
    // User info found, send it in the response
    const userInfo = results[0];
    res.json(userInfo);
  });
});

app.put('/updateEmployee', (req, res) => {
  console.log(req.body)
  const { id,  name, email, phone, password, position, department, gender, address, age, maritalStatus } = req.body;
  const sqlQuery = `UPDATE employee SET  name=?, email=?, password=?, phone=?, position=?, department=?, age=?, gender=?, martial=?,address=?  WHERE id=?`;
  const values = [name, email, password, phone, position, department, age,  gender,  maritalStatus, address, id];

  db.query(sqlQuery, values, (err, result) => {
    if (err) {
      console.error('Error updating employee:', err);
      res.status(500).json({ error: 'Internal Server Error' });
      return;
    }
    else{
    console.log('Employee updated successfully');
    res.json({ message: 'Employee updated successfully' });
}});
});

app.put('/employeeInsert', (req, res) => {
  console.log(req.body);
  const sqlQuery = 'INSERT INTO employee (empid,name, email, password, phone, position, department, date, gender, martial, address, age) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)';
  const values = [
    req.body.employeeId,
    req.body.name,
    req.body.email,
    req.body.password,
    req.body.phone,
    req.body.position,
    req.body.department,
    // req.body.profilePicture,
    req.body.dateOfJoining,
    req.body.gender,
    req.body.maritalStatus,
    req.body.address,
    req.body.age
  ];
  db.query(sqlQuery, values, (err, results) => {
    if (err) {
      console.log(err);
      return res.status(500).json({ error: 'Internal server error' });
    }
    return res.status(200).json({ message: 'Employee inserted successfully' });
  });
});

app.get("/totalEmployeeCount", (req, res) => {
  const sql = "SELECT COUNT(*) as count FROM employee";
  db.query(sql, (err, results) => {
    if (err) return res.json(err);
    const count = results[0].count;
    return res.json([{ totalEmployeeCount: count }]);
  });
});

app.get("/totalEmployeeCseCount", (req, res) => {
  const sql = "SELECT COUNT(*) as count FROM employee where department='CSE'";
  db.query(sql, (err, results) => {
    if (err) return res.json(err);
    const count = results[0].count;
    return res.json([{ totalEmployeeCseCount: count }]);
  });
});

app.get("/totalEmployeeEceCount", (req, res) => {
  const sql = "SELECT COUNT(*) as count FROM employee where department='ECE'";
  db.query(sql, (err, results) => {
    if (err) return res.json(err);
    const count = results[0].count;
    return res.json([{ totalEmployeeEceCount: count }]);
  });
});

app.get("/totalEmployeeItCount", (req, res) => {
  const sql = "SELECT COUNT(*) as count FROM employee where department='IT'";
  db.query(sql, (err, results) => {
    if (err) return res.json(err);
    const count = results[0].count;
    return res.json([{ totalEmployeeItCount: count }]);
  });
});

app.get("/totalEmployeeMechanicalCount", (req, res) => {
  const sql = "SELECT COUNT(*) as count FROM employee where department='MECHANICAL'";
  db.query(sql, (err, results) => {
    if (err) return res.json(err);
    const count = results[0].count;
    return res.json([{ totalEmployeeMechanicalCount: count }]);
  });
});

app.get("/totalEmployeePlacementCount", (req, res) => {
  const sql = "SELECT COUNT(*) as count FROM employee where department='PLACEMENT'";
  db.query(sql, (err, results) => {
    if (err) return res.json(err);
    const count = results[0].count;
    return res.json([{ totalEmployeePlacementCount: count }]);
  });
});

app.get("/totalEmployeeEeeCount", (req, res) => {
  const sql = "SELECT COUNT(*) as count FROM employee where department='EEE'";
  db.query(sql, (err, results) => {
    if (err) return res.json(err);
    const count = results[0].count;
    return res.json([{ totalEmployeeEeeCount: count }]);
  });
});

app.get("/totalEmployeeCivilCount", (req, res) => {
  const sql = "SELECT COUNT(*) as count FROM employee where department='CIVIL'";
  db.query(sql, (err, results) => {
    if (err) return res.json(err);
    const count = results[0].count;
    return res.json([{ totalEmployeeCivilCount: count }]);
  });
});

app.get("/totalEmployeeMaleCount", (req, res) => {
  const sql = "SELECT COUNT(*) as count FROM employee where gender='MALE'";
  db.query(sql, (err, results) => {
    if (err) return res.json(err);
    const count = results[0].count;
    return res.json([{ totalEmployeeMaleCount: count }]);
  });
});

app.get("/totalEmployeeFemaleCount", (req, res) => {
  const sql = "SELECT COUNT(*) as count FROM employee where gender='FEMALE'";
  db.query(sql, (err, results) => {
    if (err) return res.json(err);
    const count = results[0].count;
    return res.json([{ totalEmployeeFemaleCount: count }]);
  });
});


app.get("/totalEmployeeAdmissionCount", (req, res) => {
  const sql = "SELECT COUNT(*) as count FROM employee where department='ADMISSION'";
  db.query(sql, (err, results) => {
    if (err) return res.json(err);
    const count = results[0].count;
    return res.json([{ totalEmployeeAdmissionCount: count }]);
  });
});

app.get("/totalEmployeeFreshersCount", (req, res) => {
  const sql = "SELECT COUNT(*) as count FROM employee where department='FRESHERS'";
  db.query(sql, (err, results) => {
    if (err) return res.json(err);
    const count = results[0].count;
    return res.json([{ totalEmployeeFreshersCount: count }]);
  });
});

app.get("/totalEmployeeHrCount", (req, res) => {
  const sql = "SELECT COUNT(*) as count FROM employee where department='HR'";
  db.query(sql, (err, results) => {
    if (err) return res.json(err);
    const count = results[0].count;
    return res.json([{ totalEmployeeHrCount: count }]);
  });
});

db.connect((err) => {
  if (err) {
    console.error('Error connecting to database:', err.message);
    return;
  }
  console.log('Connected to the database');
});


//login data
app.put('/admin/login', (req, res) => {
  console.log(req.body);
  const sqlQuerry = 'SELECT * FROM login_staff WHERE staff_mail=? AND staff_pass=?;';
  const values = [req.body.uname, req.body.pass];
  db.query(sqlQuerry, values, (err, results) => {
    if (err) {
      console.log(err);
      return res.status(500).json({ error: "Internal Server Error" });
    }

    if (results.length === 1) {
      // If row size is one, send success message
      return res.status(200).json({ success: true, message : "Admin Login Successfully" });
    } else {
      return res.json({ success: false, message: "Invalid username or password" });
    }
  });
});

app.put('/employee/login', (req, res) => {
  console.log(req.body);
  const sqlQuerry = 'SELECT * FROM employee WHERE email=? AND password=?;';
  const values = [req.body.email, req.body.password];
  db.query(sqlQuerry, values, (err, results) => {
    if (err) {
      console.log(err);
      return res.status(500).json({ error: "Internal Server Error" });
    }

    if (results.length === 1) {
      // If row size is one, send success message
      return res.status(200).json({ success: true, message : "Employee Login Successfully" });
    } else {
      return res.json({ success: false, message: "Invalid username or pas" });
    }
  });
});

app.delete('/deleteEmployee/:id', (req, res) => {
  const id = req.params.id;

  // Construct SQL query to delete employee with the given id
  const sqlQuery = 'DELETE FROM employee WHERE id = ?';

  // Execute the SQL query with the id parameter
  db.query(sqlQuery, [id], (err, result) => {
    if (err) {
      console.error('Error deleting employee:', err);
      res.status(500).json({ error: 'Error deleting employee' });
    } else {
      console.log('Employee deleted successfully');
      res.status(200).json({ message: 'Employee deleted successfully' });
    }
  });
});

app.listen(5001, () => {
  console.log("Server is running on http://localhost:5001");
});
