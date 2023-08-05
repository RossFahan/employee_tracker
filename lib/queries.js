async function viewAllDepartments(connection) {
    try {
        const [rows] = await connection.query('SELECT * FROM department');
        return rows;
    } catch (err) {
        throw err;
    }
}

async function viewAllRoles(connection) {
    try {
        const [rows] = await connection.query('SELECT * FROM role');
        return rows;
    } catch (err) {
        throw err;
    }
}

async function viewAllEmployees(connection) {
    try {
        const [rows] = await connection.query('SELECT * FROM employee');
        return rows;
    } catch (err) {
        throw err;
    }
}


// Export all query functions
module.exports = {
    viewAllDepartments,
    viewAllRoles,
    viewAllEmployees,
};