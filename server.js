const mysql = require('mysql2/promise'); 
const inquirer = require('inquirer');

// Create a connection to db
const db = mysql.createConnection({
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
        ]);

        switch (selection) {
            case 'View all employees':
                await viewAllEmployees();
                break;
            case 'Add Employee':
                await addEmployee();
                break;
            case 'View all roles':
                await viewAllRoles();
                break;
            case 'Add a role':
                await addRole();
                break;
            case 'View All Departments':
                await viewAllDepartments();
                break;
            case 'Add Department':
                await addDepartment();
                break;
            case 'Exit':
                console.log('Exiting...');
                db.end(); // Close the database connection
                process.exit(); // Exit the application
                break;
            default:
                console.log('Invalid choice.\n');
                menuPrompt();
        }
    } catch (err) {
        console.error('Error:', err);
    }
}