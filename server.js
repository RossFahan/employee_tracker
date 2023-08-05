const mysql = require('mysql2');
const inquirer = require('inquirer');

// Create a connection to db
const db = mysql.createConnetction({
    host: 'localhost',
    user: 'root',
    password: 'password',
    database: 'employee_tracker_db'
},
    console.log(`Connected to the employee_tracker_db database.`)
);
