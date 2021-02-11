const fs = require('fs');
const inquirer = require('inquirer');

const Employee = require("./lib/Employee")
const Engineer = require("./lib/Engineer")
const Manager = require("./lib/Manager")
const Intern = require("./lib/Intern")


const managerQuestions = [
    {
        type: "input",
        name: "managerName",
        message: "What is the Manager's name?" + "(Required)",
        validate: nameInput => {
            if (nameInput) {
              return true;
            } else {
              console.log('Please enter the name of the Manager!');
              return false;
            }
          }
    },
    {
        type: "input",
        name: "managerId",
        message: "What is the Manager's employee ID?" + "(Required)",
        validate: nameInput => {
            if (nameInput) {
              return true;
            } else {
              console.log('Please enter their employee ID!');
              return false;
            }
          }
    },
    {
        type: "input",
        name: "managerEmail",
        message: "What is the Manager's email address?" + "(Required)",
        validate: nameInput => {
            if (nameInput) {
              return true;
            } else {
              console.log('Please enter their email address!');
              return false;
            }
          }
    },
    {
        type: "input",
        name: "officeNumber",
        message: "What is the Manager's office number?" + "(Required)",
        validate: nameInput => {
            if (nameInput) {
              return true;
            } else {
              console.log('Please enter the name of the Manager!');
              return false;
            }
          }
    }
];

const engineerQuestions = [
    {
        type: "input",
        name: "engineerName",
        message: "What is the Engineer's name?" + "(Required)",
        validate: nameInput => {
            if (nameInput) {
              return true;
            } else {
              console.log('Please enter the name of the Engineer!');
              return false;
            }
          }
    },
    {
        type: "input",
        name: "engineerId",
        message: "What is the Engineer's employee ID?" + "(Required)",
        validate: nameInput => {
            if (nameInput) {
              return true;
            } else {
              console.log('Please enter their employee ID!');
              return false;
            }
          }
    },
    {
        type: "input",
        name: "engineerEmail",
        message: "What is the Engineer's email address?" + "(Required)",
        validate: nameInput => {
            if (nameInput) {
              return true;
            } else {
              console.log('Please enter their email address!');
              return false;
            }
          }
    },
    {
        type: "input",
        name: "github",
        message: "What is the Engineer's GitHub username?" + "(Required)",
        validate: nameInput => {
            if (nameInput) {
              return true;
            } else {
              console.log('Please enter the name of the Manager!');
              return false;
            }
          }
    }
];

const internQuestions = [
    {
        type: "input",
        name: "internName",
        message: "What is the Intern's name?" + "(Required)",
        validate: nameInput => {
            if (nameInput) {
              return true;
            } else {
              console.log('Please enter the name of the Intern!');
              return false;
            }
          }
    },
    {
        type: "input",
        name: "internId",
        message: "What is the Intern's employee ID?" + "(Required)",
        validate: nameInput => {
            if (nameInput) {
              return true;
            } else {
              console.log('Please enter their employee ID!');
              return false;
            }
          }
    },
    {
        type: "input",
        name: "internEmail",
        message: "What is the Intern's email address?" + "(Required)",
        validate: nameInput => {
            if (nameInput) {
              return true;
            } else {
              console.log('Please enter their email address!');
              return false;
            }
          }
    },
    {
        type: "input",
        name: "school",
        message: "What is the Intern's school?" + "(Required)",
        validate: nameInput => {
            if (nameInput) {
              return true;
            } else {
              console.log('Please enter their school!');
              return false;
            }
          }
    }
];

function addManager() {
    inquirer.prompt(managerQuestions)
    .then(function(data) {
        const name = data.name
        const id = data.id
        const email = data.email
        const officeNumber = data.officeNumber
        const manager = new Manager(name, id, email, officeNumber)
        // teamArray.push(manager)
        addTeamMembers();
    })
}

function addTeamMembers() {
    inquirer.prompt([
        {
            type: "list",
            message: "Do you want to add another team member?",
            name: "addMember",
            choices: ["Add an Engineer", "Add an Intern", "Finish building the team" ]
        }
    ])
    .then(function(data) {
        switch (data.addMember) {
            case "Add an Engineer":
                addEngineer();
                break;
            
            case "Add an Intern":
                addIntern();
                break;

            case "Finish building the team":
                finishTeam();
                break;
        }
    })
}

function addEngineer() {
    inquirer.prompt(engineerQuestions)
    .then(function(data) {
        const name = data.name
        const id = data.id
        const email = data.email
        const github = data.github
        const engineer = new Engineer(name, id, email, github)
        // teamArray.push(engineer)
        addTeamMembers()
    })
}

function addIntern() {
    inquirer.prompt(internQuestions)
    .then(function(data) {
        const name = data.name
        const id = data.id
        const email = data.email
        const school = data.school
        const intern = new Intern(name, id, email, school)
        // teamArray.push(intern)
        addTeamMembers()
    })
}

function finishTeam() {
    console.log("You have finished building your team!")
}

addManager();
