let includePlainJs = require('./index.js');

let input = {
    outsideInput: 'Outside input'
}

let output = {
    sampleDeclaredVariable:null,
    sampleDeclaredFunction:null,
};

includePlainJs('sample.js', output, input);

console.log(output.sampleDeclaredFunction(), input, output);