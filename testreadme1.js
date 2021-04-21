/// CONTENT OF testreadme1.js

// values from 'expected' will be overriden
let expected = {
    loadedFunction: null,
    loadedVariable: 'whatever'
};

let includeplainjs = require('./index.js');
includeplainjs('samplereadme1.js', expected);

console.log(expected.loadedFunction(), expected.loadedVariable);
// Should show:
// I'm from sample, I'm global from sample
