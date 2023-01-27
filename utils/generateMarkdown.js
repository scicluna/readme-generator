// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  if (license == null) return ''

  switch(license){
    case ("MIT"):{
      return '![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)'
    }
    case ("Apache"):{
      return '[![License](https://img.shields.io/badge/License-Apache_2.0-blue.svg)]'
    }
    case ("GPL"):{
      return '(https://img.shields.io/badge/License-GPLv3-blue.svg)'
    }
  }
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  if (license == null) return ''

  switch(license){
    case "MIT":{
      return '[License: MIT](https://opensource.org/licenses/MIT)'
    }
    case "Apache":{
      return '(https://opensource.org/licenses/Apache-2.0)'
    }
    case "GPL":{
      return '(https://www.gnu.org/licenses/gpl-3.0)'
    }
  }
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection({license}) {
  if (license == null) return ''

  return `${renderLicenseBadge(license)} ${renderLicenseLink(license)}`
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}

  ## Description

  ${data.description}

  ## Table of Contents

  - [Installation](#installation)
  - [Usage](#usage)
  - [Credits](#credits)
  - [License](#license)

  ## Installation

  ${data.installation}

  ## Usage

  ${data.usage}

  ## Credits

  ${data.credits}

  ## License

  ${renderLicenseSection(data)}

  ## How to Contribute

  ${data.contribution}

  ## Tests

  ${data.tests}
`;
}

module.exports = generateMarkdown;
