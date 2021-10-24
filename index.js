// TODO: Include packages needed for this application
const fs = require('fs');
const inquirer = require('inquirer');
const generatePage = require('./develop/generateMarkdown.js');

function renderLicense(value) {
    if (value === "Apache 2.0") {
        return "[![License](https://img.shields.io/badge/License-Apache%202.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)";
    } else if (value === "Eclipse") {
        return "[![License](https://img.shields.io/badge/License-EPL%201.0-red.svg)](https://opensource.org/licenses/EPL-1.0)";
    } else if (value === "GNU GPL v3") {
        return "[![License: GPL v3](https://img.shields.io/badge/License-GPL%20v3-blue.svg)](http://www.gnu.org/licenses/gpl-3.0)";
    } else if (value === "MIT") {
        return "[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)";
    } else if (value === "Mozilla") {
        return "[![License: MPL 2.0](https://img.shields.io/badge/License-MPL%202.0-brightgreen.svg)](https://opensource.org/licenses/MPL-2.0)";
    } else {
        return "";
    }
};

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
        type: "checkbox",
        name: "license",
        message: "please select a license for this project.",
        choices: [
            "Apache 2.0",
            "Eclipse",
            "GNU GPL v3",
            "MIT",
            "Mozilla"
        ],
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
    fs.writeFile(fileName, data, function (err) {
        if (err) {
            return console.log(err)
        }
    });
}

// TODO: Create a function to initialize app
function init() {
    inquirer.prompt(questions).then((data) => {
        console.log(JSON.stringify(data, null, " "));
        data.renderLicense = renderLicense(data.license);
        writeToFile("./develop/readME.md", generatePage(data));
    })
}

// Function call to initialize app
init();