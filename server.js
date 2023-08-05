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


// Function to display main menu and handle user input
async function menuPrompt() {
    try {
        // Extract via object deconstruction
        const { selection } = await inquirer.prompt([
            {
                type: 'list',
                name: 'selection',
                message: 'What would you like to do?:',
                choices: [
                    'View all employees',
                    'Add Employee',
                    'View all roles',
                    'Add a role',
                    'View All Departments',
                    'Add Department',
                    'Exit'
                ]
            }
        ]);
    }

    catch (err) {
        console.error('Error:', err);
    }
}