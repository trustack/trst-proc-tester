const yargs = require('yargs');
const procTester = require('./main'); 
const { hideBin } = require('yargs/helpers')

const argv = yargs(hideBin(process.argv))
  .alias('p', 'procedue')
  .alias('i', 'input')
  .alias('s', 'secret')
  .usage('Usage: $0 [options]')
  .example('$0 -p ./index.js -k ./cert.pem -i false', 'Package Procedure code in index.js into a correct output file')
  .describe('p', 'Procedure code file path.')
  .describe('i', 'Input.json path.')
  .describe('s', 'Secret.json path.')
  .help('h')
  .alias('h', 'help')
  .demand(1).argv;

  let inputFile = args.i;
  let secretFile = args.s;
  let procPath = `${args.p}/index.js`;
  let output = await procTester(inputFile, secretFile, procPath);
  console.log(JSON.stringify(output));

module.exports = { procTester }