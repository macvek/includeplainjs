let includePlainJs = require('./index.js');
let process = require('process');

let input = {
    outsideInput: 'Outside input'
}

let output = {
    sampleDeclaredVariable:null,
    sampleDeclaredFunction:null,
};
console.log('Loading sample.js');
includePlainJs('sample.js', output, input);

console.log('Assertions...');
if ('Sample created global' !== output.sampleDeclaredVariable ||
    'Encapsulates global Outside input' !== output.sampleDeclaredFunction()) {
        console.log('Failed');
        process.exitCode = 1;
}
else {
    console.log('Passed');
}

