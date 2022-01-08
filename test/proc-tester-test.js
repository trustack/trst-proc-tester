const describe = require('mocha').describe,
    it = require('mocha').it,
    expect = require('chai').expect;
const { testProc } = require('../main');

let args = {
    i: 'test/input.json',
    s: 'test/mock_proc/secrets.json',
    p: 'test/mock_proc'
}

describe('Mocha tests are running', function () {
    it('should ensure 1 is 1', function () {
        expect(1).eql(1);
    });
});

describe('Can run Procedure', function () {
    it('Procedure runs and returns expected output', async function () {

        let inputFile = args.i;
        let secretFile = args.s;
        let procPath = `${args.p}/mock_index.js`;

        let resultsStr = await testProc(inputfile, secretFile, procPath);
        let results = JSON.parse(resultsStr);
        // input.json - {"test":"test_value"}
        // secrets.json - {"secret":"test"}
        // procedure output - {"input":input, "secret":secret}
        expect(results.input).eql('test_value');
        expect(results.secret).eql('test');
    });
});