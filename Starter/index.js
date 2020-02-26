const axios = require("./git.ignore/node_modules/axios");
const inquirer = require("inquirer");
const fs = require("fs");
const generateHTML = require("./generateHTML")
const convertFactory = require('electron');
// const open = require('open');
const questions = [
    {
        message: "Enter your GitHub username",
        name: "username"
    },
    {
        type: "list",
        name: "color",
        message: "What is your favorite color?",
        choices: ["green", "blue", "pink", "red"]
    }
];

inquirer.prompt(questions).then(function ({ username, color }) {
    const queryUrl = `https://api.github.com/users/${username}`;
    // res response form axios
    axios.get(queryUrl).then(function (res, err) {
        if (err) console.log("error", err);
        // console.log("string", res.data);
        // console.log("string", res.owner);
        return generateHTML({
            color,
            ...res.data
        })
        

    }).then(html => {
        var conversion = convertFactory({
            converterPath: convertFactory.converters.PDF
        });
        conversion({ html }, function (err, result) {
            if (err) {
                return console.error("string", err);
            }
            console.log(result.numberOfPages);
            console.log(result.logs);
            result.stream.pipe(fs.createWriteStream(path.join(__dirname, "something.pdf")));
            conversion.kill(); // necessary if you use the electron-server strategy, see bellow for details
        });
     })
});

function writeToFile(fileName, data) { }

function init() { }

init();