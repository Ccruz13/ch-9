// TODO: Include packages needed for this application
const fs = require('fs');
const inquirer = require('inquirer');
const Choices = require('inquirer/lib/objects/choices');
const generatePage = require('./develop/generateMarkdown');

// TODO: Create an array of questions for user input
const questions = [
    {
        type: "input",
        name: "title",
        message: "what is the title of your project? (Required)",
        validate: nameInput => {
            if (nameInput) {
                return true;
            } else {
                console.log('You need to enter a project name!');
                return false;
            }
        }
    },
    {
        type: "input",
        name: "description",
        message: "Provide a discription of your project.",
        validate: descriptionInput => {
            if (descriptionInput) {
                return true;
            } else {
                console.log('You need to enter a project description');
                return false;
            }
        }
    },

    // Table of content

    {
        type: "input",
        name: "installation",
        message: "Please enter steps on how to install the softwear.",
        validate: installationInput => {
            if (installationInput) {
                return true;
            } else {
                console.log("You need to enter installation steps.");
                return false;
            }
        }
    },
    {
        type: "input",
        name: "usage",
        message: "Please describe the usage of this program.",
        validate: usageInput => {
            if (usageInput) {
                return true;
            } else {
                console.log("Please enter a description of the usage for this program.");
                return false;
            }
        }
    },
    {
        type: "list",
        name: "license",
        message: "please select a license for this project."
        choices: [],
    },
    {
        type: "input",
        name: "contribution",
        message: "Please enter the name(s) of whoever may have contributed.",
        validate: creditInput => {
            if (creditInput) {
                return true;
            } else {
                console.log("Please enter the names of the people who contributed.");
                return false;
            }
        }
    },
    {
        type: "input",
        name: "tests",
        message: "Please enter any testing intructions for this project.",
        validate: testInput => {
            if(testInput) {
                return true;
            } else {
                console.log("please enter testing intructions.");
                return false;
            }
        }
    },
    {
        type: "input",
        name: "userName",
        message: "Please enter your GitHub username.",
        validate: userNameInput => {
            if (userNameInput) {
                return true;
            } else {
                console.log("Please enter a GitHub username.");
                return false;
            }
        }
    },
    {
        type: "input",
        name: "userEmail",
        message: "Please enter your Email address.",
        validate: userEmail => {
            if("@" && ".com") {
                return true;
            } else {
                console.log("Please enter a valid Email address.");
                return false;
            }
        }
    }
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    
}

// TODO: Create a function to initialize app
function init() {
    inquirer.prompt(questions).then((data) => {
        console.log(JSON.stringify(data, null, " "));
    })
}

// Function call to initialize app
init();