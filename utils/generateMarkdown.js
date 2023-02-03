//Handling the license switch for the badge
function renderLicenseBadge(license) {
  if (!license) return ''

  switch(license){
    case "MIT":{
      return '![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)'
    }
    case "Apache":{
      return '![License](https://img.shields.io/badge/License-Apache_2.0-blue.svg)'
    }
    case "GPL":{
      return '![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)'
    }
    default: break
  }
}

//Handling the license switch for the link
function renderLicenseLink(license) {
  if (!license) return ''

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

//Handling the license section contents
function renderLicenseSection({license}) {
  if (!license) return ''

  return `This application is covered under the ${license} license. Read more at ${renderLicenseLink(license)}`
}

//Handling the optional picture render
function renderPicture({picture}){
  if (!picture) return ''

  return `![](${picture})`
}


//Handle the readme generation
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
  ${renderPicture(data)}

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
