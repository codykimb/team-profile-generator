const Employee = require('./Employee');

// In addition to Employee's properties and methods, Manager will also have:


class Manager extends Employee {

    constructor (name, id, email, officeNumber, teamName) {
    
        super(name, id, email);

        // officeNumber
        this.officeNumber = officeNumber
        this.teamName = teamName

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