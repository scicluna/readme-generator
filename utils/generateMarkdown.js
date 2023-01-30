// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  if (license == null) return ''

  switch(license){
    case ("MIT"):{
      return '![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)'
    }
    case ("Apache"):{
      return '![License](https://img.shields.io/badge/License-Apache_2.0-blue.svg)'
    }
    case ("GPL"):{
      return '![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)'
    }
    default: break
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
      return '[License](https://opensource.org/licenses/Apache-2.0)'
    }
    case "GPL":{
      return '[License: GPL v3](https://www.gnu.org/licenses/gpl-3.0)'
    }
    default: break
  }
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection({license}) {
  if (license == null) return ''

  return `This application is covered under the ${license} license. Read more at ${renderLicenseLink(license)}`
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `${renderLicenseBadge(data.license)}
  
  # ${data.title}

  ## Description

  ${data.description}

  ## Table of Contents

  - [Installation](#installation)
  - [Usage](#usage)
  - [Credits](#credits)
  - [License](#license)
  - [Contributions](#contributions)
  - [Tests](#tests)
  - [Questions](#questions)

  ## Installation

  ${data.installation}

  ## Usage

  ${data.usage}

  ## Credits

  ${data.credits}

  ## License

  ${renderLicenseSection(data)}

  ## Contributions

  ${data.contribution}

  ## Tests

  ${data.tests}

  ## Questions

  1. Where can I find your github so that I can view your other projects? https://github.com/${data.github}

  2. What email address should I use to contact you regarding further opportunities or questions? ${data.email}
`;
}

module.exports = generateMarkdown;
