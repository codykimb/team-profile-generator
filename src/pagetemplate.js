const fs = require('fs');

function finishTeam(team) {
    console.log("You have finished building your team!")

    const htmlArray = []
    const htmlBeginning = `
    <!DOCTYPE html>
        <html lang="en">
        <head>
            <meta charset="UTF-8">
            <meta name="viewport" content="width=device-width, initial-scale=1.0">
            <meta http-equiv="X-UA-Compatible" content="ie=edge">
            <title>${team[0].teamName}</title>
            <script src="https://kit.fontawesome.com/98884ac5c0.js" crossorigin="anonymous"></script>
            <link rel="stylesheet" href="./styles.css">
        </head>
        <body>
            <div class="banner-bar">
                <h1>${team[0].teamName}</h1>
            </div>
            <div class="card-container">
            `
            htmlArray.push(htmlBeginning);

            for (let i = 0; i < team.length; i++) {
                let memberCards = `
                <div class="member-card">
                    <div class="card-top">
                        <h2>${team[i].name}</h2>`
                        if (team[i].getRole() === "Manager") {
                            memberCards += `<h2><i class="fas fa-user-tie"></i>`
                        }
                        if (team[i].getRole() === "Engineer") {
                            memberCards += `<h2><i class="fas fa-code-branch"></i>`
                        }
                        if (team[i].getRole() === "Intern") {
                            memberCards += `<h2><i class="fas fa-graduation-cap"></i>`
                        }
                        memberCards += ` ${team[i].getRole()}</h2>
                    </div>
                    <div class="card-bottom list-group">
                        <li>Employee ID: ${team[i].id}</li>
                        <li>Email: <a href="mailto:${team[i].email}">${team[i].email}</a></li>
                        `
                if (team[i].officeNumber) {
                    memberCards += `<li>Office Number: ${team[i].officeNumber}</li>`
                }
                if (team[i].github) {
                    memberCards += `<li class="list-group-item">GitHub: <a href="https://github.com/${team[i].github}" target="_blank">${team[i].github}</a></li>`
                }
                if (team[i].school) {
                    memberCards += `<li class="list-group-item">School: ${team[i].school}</li>`
                }
                memberCards += `
                    </div>
                </div>
                `
                htmlArray.push(memberCards)
            }

    const htmlEnd = `
            </div>
        </body>
        </html>`
    htmlArray.push(htmlEnd);

    fs.writeFile(`./dist/myteam.html`, htmlArray.join(""), function (err) {
        
    })
}

module.exports = {finishTeam}