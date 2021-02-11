const fs = require('fs');
const inquirer = require('inquirer');

const Employee = require("./lib/Employee")
const Engineer = require("./lib/Engineer")
const Manager = require("./lib/Manager")
const Intern = require("./lib/Intern")

let teamArray = [];

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
        const name = data.managerName
        const id = data.managerId
        const email = data.managerEmail
        const officeNumber = data.officeNumber
        const manager = new Manager(name, id, email, officeNumber)
        teamArray.push(manager)
        console.log(teamArray)
        addTeamMembers()
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
        const name = data.engineerName
        const id = data.engineerId
        const email = data.engineerEmail
        const github = data.github
        const engineer = new Engineer(name, id, email, github)
        teamArray.push(engineer)
        console.log(teamArray)
        addTeamMembers()
    })
}

function addIntern() {
    inquirer.prompt(internQuestions)
    .then(function(data) {
        const name = data.internName
        const id = data.internId
        const email = data.internEmail
        const school = data.school
        const intern = new Intern(name, id, email, school)
        teamArray.push(intern)
        console.log(teamArray)
        addTeamMembers()
    })
}

function finishTeam() {
    console.log("You have finished building your team!")

    const htmlArray = []
    const htmlBeginning = `
    <!DOCTYPE html>
        <html lang="en">
        <head>
            <meta charset="UTF-8">
            <meta name="viewport" content="width=device-width, initial-scale=1.0">
            <meta http-equiv="X-UA-Compatible" content="ie=edge">
            <title>My Team</title>
            <link href="https://fonts.googleapis.com/css?family=Bebas+Neue&display=swap" rel="stylesheet">
            <link rel="stylesheet" href="./styles.css">
        </head>
        <body>
            <div class="banner-bar">
                <h1>My Team</h1>
            </div>
            <div class="card-container">
            `
            htmlArray.push(htmlBeginning);

            for (let i = 0; i < teamArray.length; i++) {
                let object = `
                <div class="member-card">
                    <div class="card-top">
                        <h2>${teamArray[i].name}</h2>
                        <h2>${teamArray[i].getRole()}</h2>
                    </div>
                    <div class="card-bottom list-group">
                        <li class="list-group-item">Employee ID: ${teamArray[i].id}</li>
                        <li class="list-group-item">Email: <a href="mailto:${teamArray[i].email}">${teamArray[i].email}</a></li>
                `
                if (teamArray[i].officeNumber) {
                    object += `
                    <li class="list-group-item">Office Number: ${teamArray[i].officeNumber}</li>
                    `
                }
                if (teamArray[i].github) {
                    object += `
                    <li class="list-group-item">GitHub: <a href="https://github.com/${teamArray[i].github}">${teamArray[i].github}</a></li>
                    `
                }
                if (teamArray[i].school) {
                    object += `
                    <li class="list-group-item">School: ${teamArray[i].school}</li>
                    `
                }
                object += `
                </div>
                </div>
                `
                htmlArray.push(object)
            }

    const htmlEnd = `
            </div>
            </body>
            </html>
            `
    htmlArray.push(htmlEnd);

    fs.writeFile(`./dist/myteam.html`, htmlArray.join(""), function (err) {
        
    })
}

addManager();
