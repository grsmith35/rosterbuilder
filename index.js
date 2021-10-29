const inquirer = require('inquirer');
const fs = require('fs');
const Engineer = require('./lib/Engineer')
const Manager = require('./lib/Manager');
const Intern = require('./lib/Intern');
const { create } = require('domain');

const roster = [];

async function orderofOps() {
    const first = await starter();
    console.log(first + ' process is done.');
    addMember();
}

function addMember() {
    inquirer.prompt([
        {
            message: 'Please enter the team members name.',
            name: 'name',
            validate: nameInput => {
                if(nameInput) {
                    return true;
                } else {
                    return false;
                }
            }
        },
        {
            message: 'Please enter team members employee number.',
            name: 'number',
            validate: numberInput => {
                if(numberInput > 0) {
                    return true;
                } else {
                    return false;
                }
            }
        },
        {
            message: 'Please Enter team members email',
            name: 'email',
            validate: emailInput => {
                if(emailInput) {
                    return true;
                } else {
                    return false;
                }
            }
        },
        {
            type: 'list',
            message: 'Please select the team members role on the team.',
            name: 'role', 
            choices: ['Manager', 'Engineer', 'Intern']
        },
        {
            message: 'Please enter Managers office number.',
            name: 'officeNumber',
            when: (data) => data.role === 'Manager',
            validate: officeInput => {
                if(officeInput) {return true;}
                else{return false;}
            }
        },
        {
            message: 'Please enter Engineers Github.',
            name: 'gitHub',
            when: (data) => data.role === 'Engineer',
            validate: gitInput => {
                if(gitInput) {return true;}
                else {return false;}
            }
        },
        {
            message: 'Please enter Interns school name.',
            name: 'school',
            when: (data) => data.role === 'Intern',
            validate: schoolInput => {
                if(schoolInput) {return true;}
                else {return false;}
            }
        }
    ])
    .then(data => {
        if(data.role === 'Manager') {
            const person = new Manager(data);
            createCard(person);
        }
        else if(data.role === 'Engineer') {
            const person = new Engineer(data);
            createCard(person);
        }
        else if(data.role === 'Intern') {
            const person = new Intern(data);
            createCard(person);
        }
    })
};

function createCard(person) {
    const name = person.name.name;
    const id = person.name.number;
    const role = person.role;
    const email = person.name.email;

    if(role === 'Manager') {
        const officeNumber = person.name.officeNumber
        console.log(officeNumber)
        const card = `<div class="col-md-4">
        <div class="card ms-auto mb-3">
        <div class="card-header">
        <h4>${name}</h4>
        <h5>${role}</h5>
        </div>
        <ul class="list-group list-group-flush">
        <li class="list-group-item">ID: ${id}</li>
        <li class="list-group-item">E-mail: ${email}</li>
        <li class="list-group-item">Office #: ${officeNumber}</li>
        </ul>
        </div>
        </div>`
        fs.appendFile('./dist/roster.html', card, (err) => {
            if(err) {
                console.log(err);
            }
            check();
        })
    }
    else if(role === 'Engineer') {
        const gitHub = person.name.gitHub;
        const card = `<div class="col-md-4">
        <div class="card ms-auto mb-3">
        <div class="card-header">
        <h4>${name}</h4>
        <h5>${role}</h5>
        </div>
        <ul class="list-group list-group-flush">
        <li class="list-group-item">ID: ${id}</li>
        <li class="list-group-item">E-mail: ${email}</li>
        <li class="list-group-item">Github: ${gitHub}</li>
        </ul>
        </div>
        </div>`
        fs.appendFile('./dist/roster.html', card, (err) => {
            if(err) {
                console.log(err);
            }
            check();
        })
    }
    else {
        const school = person.name.school;
        const card = `<div class="col-md-4">
        <div class="card ms-auto mb-3">
        <div class="card-header">
        <h4>${name}</h4>
        <h5>${role}</h5>
        </div>
        <ul class="list-group list-group-flush">
        <li class="list-group-item">ID: ${id}</li>
        <li class="list-group-item">E-mail: ${email}</li>
        <li class="list-group-item">School: ${school}</li>
        </ul>
        </div>
        </div>`
        fs.appendFile('./dist/roster.html', card, (err) => {
            if(err) {
                console.log(err);
            }
            check();
        })
    }
};

function starter() {
    const start = `<!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Team Roster</title>
        <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css" integrity="sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T" crossorigin="anonymous">
    </head>
    <body>
        <nav class="navbar navbar-dark bg-dark mb-3">
            <span class="navbar-brand text-center mx-auto"><h1>Team Roster</h1></span>
        </nav>
        <div class="container" id="container">
        <div class="row"`;

        fs.writeFile('./dist/roster.html', start, (err) => {
            if(err) {
                console.log(err);
            }
        })
}

function ender() {
    const end = `</div>    
    </div>
    </body>
    </html>`;

    fs.appendFile('./dist/roster.html', end, (err) => {
        if(err) {
            console.log(err);
        }
    })
};

function check() {
    inquirer.prompt([
        {
            type: 'confirm',
            message: 'Would you like to add another team member?',
            name: 'confirm'
        }
    ])
    .then(response => {
        if(response.confirm === true) {
            addMember();
        } else {
            ender();
            return 
        }
    })
}

orderofOps();