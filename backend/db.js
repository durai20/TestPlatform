const mysql = require('mysql2');
function createConnectionPool() {
  const pool = mysql.createPool({
    host:'localhost',
    user: 'root',
    password: '',
    database: 'Proctor_dbs',
    waitForConnections: true,
    connectionLimit: 10,
    queueLimit: 0
  });

  pool.on('connection', (connection) => {
    console.log('Connected to MySQL database');
  });

 
  return pool.promise();
}

module.exports = createConnectionPool; 
