const Employee = require('./Employee');

// In addition to Employee's properties and methods, Engineer will also have:

class Engineer extends Employee {

    constructor (name, id, email, github) {
    
        super(name, id, email);

        // github // GitHub username
        this.github = github

    }
    // getGithub()
    getGithub() {
        return this.github
    }

    // getRole() // Overridden to return 'Engineer'
    getRole() {
        return `Engineer`
    }
}

module.exports = Engineer;

