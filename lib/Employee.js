// The first class is an Employee parent class with the following properties and methods:

class Employee {

    constructor(name = '', id, email) {

    // name
    this.name = name;

    // id
    this.id = id

    // email
    this.email = email
    }

// getName()

// getId()

// getEmail()

// getRole() // Returns 'Employee'


}

module.exports = Employee;

// The other three classes will extend Employee.