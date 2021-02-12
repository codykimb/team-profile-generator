//inquierer
const inquirer = require('inquirer');

//classes
const Employee = require("./lib/Employee")
const Engineer = require("./lib/Engineer")
const Manager = require("./lib/Manager")
const Intern = require("./lib/Intern")

// require HTML template
const {finishTeam} = require("./src/pagetemplate.js")

//empty array to push team members objects
let teamArray = [];

//question sets
const managerQuestions = [
    {
        type: "input",
        name: "teamName",
        message: "What is your team name?" + "(Required)",
        validate: nameInput => {
            if (nameInput) {
              return true;
            } else {
              console.log('Please enter the name of the team!');
              return false;
            }
          }
    },
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

//initialize app, add team name, add manager, push to array, ask to add more team members
function addManager() {
    inquirer.prompt(managerQuestions)
    .then(function(data) {
        const name = data.managerName
        const id = data.managerId
        const email = data.managerEmail
        const officeNumber = data.officeNumber
        const teamName = data.teamName
        const manager = new Manager(name, id, email, officeNumber, teamName)
        teamArray.push(manager)
        addTeamMembers()
    })
}

// ask: add an engineer, add an intern, or finish team?
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
                finishTeam(teamArray);
                break;
        }
    })
}

// add a new engineer, push to array, and then ask to add more team members
function addEngineer() {
    inquirer.prompt(engineerQuestions)
    .then(function(data) {
        const name = data.engineerName
        const id = data.engineerId
        const email = data.engineerEmail
        const github = data.github
        const engineer = new Engineer(name, id, email, github)
        teamArray.push(engineer)
        addTeamMembers()
    })
}

// add a new intern, push to array, and then ask to add more team members
function addIntern() {
    inquirer.prompt(internQuestions)
    .then(function(data) {
        const name = data.internName
        const id = data.internId
        const email = data.internEmail
        const school = data.school
        const intern = new Intern(name, id, email, school)
        teamArray.push(intern)
        addTeamMembers()
    })
}

// call to initialize app and ask first question
addManager();
