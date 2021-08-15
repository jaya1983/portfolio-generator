const inquirer = require('inquirer');
 const fs = require('fs');
// const generatePage = require('./src/page-template');

// const pageHTML = generatePage(name, github);

// fs.writeFile('./index.html', pageHTML, err => {
//   if (err) throw err;

//   console.log('Portfolio complete! Check out index.html to see the output!');
// });

inquirer
  .prompt([
  {
    type: 'input',
    name: 'name',
    message: 'What is your name?'
  }
  ])
  .then((answers) => {
    // Use user feedback for... whatever!!
   console.log("answers", answers);
  })
  .catch((error) => {
    if (error.isTtyError) {
      // Prompt couldn't be rendered in the current environment
    } else {
      // Something else went wrong
    }
  });