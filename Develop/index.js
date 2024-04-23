const fs = require('fs');
const colors = require('colors')
const generateMarkdown = require("./utils/generateMarkdown");

// TODO: Include packages needed for this application

// TODO: Create an array of questions for user input
const questions = [
    {
        type: 'input',
        name: 'description',
        message: 'What is a description of your project?'
    },
    {},

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
