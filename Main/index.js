const fs = require('fs');
const colors = require('colors')
const generateMarkdown = require("./generateMarkdown");

// TODO: Include packages needed for this application

// TODO: Create an array of questions for user input
const questions = [
    {
        type: 'input',
        name: 'userName',
        message: 'What is your GitHub username?'
    },
    {
        type: 'input',
        name: 'repositoryName',
        message: 'What is your repository name?'
    },
    {
        type: 'input',
        name: 'description',
        message: 'What is a description of your project?'
    },
    {
        type: 'input',
        name: 'installation',
        message: 'Add installation detials for your project.'
    },
    {
        type: 'input',
        name: 'usage',
        message: 'Add usage instructions for your project.'
    },
    {
        type: 'list',
        name: 'license',
        message: 'Add installation detials for your project',
        choices: ['MIT', 'Apache License 2.0', 'GNU General Public License v3.0']
    },
    {
        type: 'input',
        name: 'tests',
        message: 'Write any tests for your application.'
    },
    {
        type: 'input',
        name: 'email',
        message: 'Add an email for people to reach you with questions.'
    },

];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    fs.writeFile(fileName, data, (err)=>{
        if (err) throw err;
    })
}

// TODO: Create a function to initialize app
function init() {
    inquirer.prompt(questions).then((answers)=>{
        //pass the answers to the big string
        const string = generateMarkdown(answers)
        //write the file with that string
        writeToFile('readme.md', string)
    })
}

// Function call to initialize app
init();
