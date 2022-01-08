//main.js
const fs = require('fs');
const path = require('path');
const { NodeVM, VMScript } = require('vm2');
// require('dotenv').config();

const commChannelId = process.env.COMM_CHANNEL_ID || "0";
const procTimeoutPeriod = 0;

let input = false;
let secrets = false;

// Thanks to cdauth: https://stackoverflow.com/posts/65446343/revisionss
async function fileExists(filename) {
    try {
        await fs.promises.stat(filename);
        return true;
    } catch (err) {
        if (err.code === 'ENOENT') {
            return false;
        } else {
            throw err;
        }
    }
}

/**
 * Will locally test a Trustack Procedure, according to the provided inputs.
 * @param {string} inputFile Path to the `input.json` file.
 * @param {string} secretFile Path to the `secret.json` file.
 * @param {string} procPath Path to the Procedure root folder. Procedure entry must be `index.js`.
 * @returns {Promise} Promise wrapped output from the procedure.
 */
async function testProc(inputFile, secretFile, procPath) {
    return new Promise(async (resolve, reject) => {
        // Step 1: Package/Secret inputs
        if (await fileExists(inputFile)) {
            input = await fs.promises.readFile(inputFile);
            input = JSON.parse(input);
        }
        if (await fileExists(secretFile)) {
            secrets = await fs.promises.readFile(secretFile);
            secrets = JSON.parse(secrets);
        }

        // Step 3: Execute code
        let sandboxObj = { input: input, secrets: secrets, timeout: procTimeoutPeriod }
        try {
            const vm = new NodeVM({
                console: 'inherit',
                sandbox: sandboxObj,
                root: './',
                require: {
                    external: ['*'],
                    builtin: ['*'],
                    root: './',
                    wrapper: 'none'
                }
            });

            let procFunction = vm.runFile(procPath);
            let procFuncRespOutput = procFunction().catch((err) => {
                console.error(err);
            });

            procFuncRespOutput.then(async (procOutput) => {
                // Step 4: Get output from Procedure, and covert to base64
                resolve(procOutput);
                return;
            });
        }
        catch (err) {
            console.error(err);
            reject(err);
        }
    });
}

module.exports = { testProc }