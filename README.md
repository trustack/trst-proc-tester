<img width="7%" src="https://www-trustack-io.ipns.dweb.link/favicon.ico" />
<img width="40%" src="https://www-trustack-io.ipns.dweb.link/img/trustack.png" />

# Trustack Procedure Tester CLI Tool  - https://trustack.io

This repo contains the a command line tool for testing locally developed Trustack Procedures. The tool will simulate how a Procedure is run on a Trustack Exec node, allowing the developer to test and troubleshoot their Procedure without deploying to the Trustack decentralized cloud network.

 <a href="https://github.com/lbryio/lbry-desktop/blob/master/LICENSE" title="MIT licensed">
   <img alt="npm" src="https://img.shields.io/dub/l/vibe-d.svg?style=flat">
 </a>

## Table of Contents

- [Trustack Procedure Tester CLI Tool  - https://trustack.io](#trustack-procedure-tester-cli-tool----httpstrustackio)
  - [Table of Contents](#table-of-contents)
  - [Installation](#installation)
  - [Usage](#usage)
    - [CLI](#cli)
    - [API](#api)
    - [Procedure Development](#procedure-development)
  - [Contributing](#contributing)
  - [License](#license)
  - [Security](#security)
  - [Contact](#contact)
  - [Additional information and links](#additional-information-and-links)

## Installation

`npm install proc-tester`

## Usage
### CLI
Usage can be seen using the `--help` option, which is posted here below:
```sh
Usage: proc-tester [options]

Options:
      --version   Show version number                                  [boolean]
  -p, --procedue  Procedure code file path.
  -i, --input     Input.json path.
  -s, --secret    Secret.json path.
  -h, --help      Show help                                            [boolean]

Examples:
  index.js -p ./Procedure_Root_Folder -i ./input.json -s ./secret.json 
  ```
### API
```javascript
 * Will locally test a Trustack Procedure, according to the provided inputs.
 * @param {string} inputFile Path to the `input.json` file.
 * @param {string} secretFile Path to the `secret.json` file.
 * @param {string} procPath Path to the Procedure root folder. Procedure entry must be `index.js`.
 * @returns {Promise} Promise wrapped output from the procedure.
 ```
 *Example Usage:*
 ```javascript
 const { procTester } = require('trst-proc-tester');
 let output = await procTester(inputFile, secretFile, procPath);
 ```
 
### Procedure Development

See [Procedure Examples](https://github.com/trustack/trustack-sdk/blob/master/Procedure_Examples/README.md) in the trustack-sdk repo for how to write Procedures.

## Contributing

See [CONTRIBUTING](CONTRIBUTING)

## License

This project is MIT licensed. For the full license, see [LICENSE](LICENSE).

## Security

_TBD_

## Contact

The primary contact for this project is [@fcbrandon].

## Additional information and links

- [Trustack SDK](https://github.com/trustack/trustack-sdk)
- [Procedure Builder Procedure](https://github.com/trustack/procedure-builder-procedure)

`Copyright (C) 2021 Brandon Caldwell - All Rights Reserved`
