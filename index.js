#!/usr/bin/env node
const yargs = require('yargs');
const procTester = require('./main').testProc; 
const { hideBin } = require('yargs/helpers')
const path = require('path');

const argv = yargs(hideBin(process.argv))
  .alias('i', 'input')
  .alias('s', 'secret')
  .usage('Usage: $0 [options]')
  .example('$0 ./index.js -i ./input.json -s ./secret.json', 'Test the procedure locally.')
  .describe('p', 'Procedure code file path.')
  .describe('i', 'Input.json path.')
  .describe('s', 'Secret.json path.')
  .help('h')
  .alias('h', 'help')
  .showHelpOnFail(true)
  .demand(1).argv;


// Need to wrap to make the async/await calls
(async (args) => {
  let inputFile = args.i;
  let secretFile = args.s;
  let procPath = path.join(args._[0], 'index.js');
  let output = await procTester(inputFile, secretFile, procPath);
  console.log(`\n\nOutput returned from Procedure (JSON.stringified):\n${JSON.stringify(output)}`);
})(argv);