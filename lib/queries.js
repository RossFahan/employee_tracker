    // async function viewAllDepartments(db) {
    //     try {
    //         const [rows] = await db.query('SELECT * FROM department');
    //         return rows;
    //     } catch (err) {
    //         throw err;
    //     }
    // }

    // async function viewAllRoles(db) {
    //     try {
    //         const [rows] = await db.query('SELECT * FROM role');
    //         return rows;
    //     } catch (err) {
    //         throw err;
    //     }
    // }

    // async function viewAllEmployees(db) {
    //     try {
    //         const [rows] = await db.query('SELECT * FROM employee');
    //         return rows;
    //     } catch (err) {
    //         throw err;
    //     }
    // }

    // async function addDepartment(db, name) {
    //     try {
    //         const [result] = await db.query('INSERT INTO department (name) VALUES (?)', [name]);
    //         return result;
    //     } catch (err) {
    //         throw err;
    //     }
    // }

    // async function addRole(db, title, salary, departmentId) {
    //     try {
    //         const [result] = await db.query('INSERT INTO role (title, salary, department_id) VALUES (?, ?, ?)', [title, salary, departmentId]);
    //         return result;
    //     } catch (err) {
    //         throw err;
    //     }
    // }

    // async function addEmployee(db, firstName, lastName, roleId, managerId) {
    //     try {
    //         const [result] = await db.query('INSERT INTO employee (first_name, last_name, role_id, manager_id) VALUES (?, ?, ?, ?)', [firstName, lastName, roleId, managerId]);
    //         return result;
    //     } catch (err) {
    //         throw err;
    //     }
    // }

    // // Export all query functions
    // module.exports = {
    //     viewAllDepartments,
    //     viewAllRoles,
    //     viewAllEmployees,
    //     addDepartment,
    //     addRole,
    //     addEmployee
    // };