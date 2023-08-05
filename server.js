const mysql = require('mysql2');
const inquirer = require('inquirer');

// Create a connection to the database
const db = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'password',
    database: 'employee_tracker_db'
});

// Connect to the database
db.connect((err) => {
    if (err) {
        console.error('Error connecting to database:', err);
        return;
    }
    console.log('Connected to the employee_tracker_db database.');

    // Start the application
    menuPrompt();
});

function viewAllDepartments() {
    db.query('SELECT * FROM department', (err, results) => {
        if (err) {
            console.error('Error fetching departments:', err);
            return;
        }
        console.log(results);
        menuPrompt(); // Recursively call the menu
    });
}

function viewAllRoles() {
    db.query('SELECT * FROM role', (err, results) => {
        if (err) {
            console.error('Error fetching roles:', err);
            return;
        }
        console.log(results);
        menuPrompt(); // Recursively call the menu
    });
}

function viewAllEmployees() {
    db.query('SELECT * FROM employee', (err, results) => {
        if (err) {
            console.error('Error fetching employees:', err);
            return;
        }
        console.log(results);
        menuPrompt(); // Recursively call the menu
    });
}

// Function to add a new department
function addDepartment() {
    inquirer.prompt([
        {
            type: 'input',
            name: 'name',
            message: 'What is the name of the department?:'
        }
    ]).then((answers) => {
        const { name } = answers;
        db.query('INSERT INTO department (name) VALUES (?)',
            [name],
            (err, results) => {
                if (err) {
                    console.error('Error adding department:', err);
                } else {
                    console.log('Department added successfully.');
                }
                menuPrompt();
            }
        );
    }).catch((err) => {
        console.error('Error:', err);
    });
}


// Function to display main menu and handle user input
function menuPrompt() {
    inquirer.prompt([
        {
            type: 'list',
            name: 'selection',
            message: 'What would you like to do?:\n',
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
    ]).then((answers) => {
        const selection = answers.selection;

        switch (selection) {
            case 'View all employees':
                viewAllEmployees();
                break;
            case 'Add Employee':
                addEmployee();
                break;
            case 'View all roles':
                viewAllRoles();
                break;
            case 'Add a role':
                addRole();
                break;
            case 'View All Departments':
                viewAllDepartments();
                break;
            case 'Add Department':
                addDepartment();
                break;
            case 'Exit':
                console.log('Exiting...');
                db.end(); // Close the database connection
                process.exit(); // Exit the application
                break;
            default:
                console.log('Invalid choice.\n');
                menuPrompt(); // Recursively call the function if input is invalid to restart the process
        }
    }).catch((err) => {
        console.error('Error:', err);
    });
}