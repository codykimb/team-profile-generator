const Employee = require('./Employee');

// In addition to Employee's properties and methods, Manager will also have:


class Manager extends Employee {

    constructor (name, id, email, officeNumber) {
    
        super(name, id, email);

        // officeNumber
        this.officeNumber = officeNumber

    }
    // getSchool()
    getSchool() {
        return this.school
    }

    // getRole() // Overridden to return 'Manager'
    getRole() {
        return `Manager`
    }
}

module.exports = Manager;