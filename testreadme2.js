/// CONTENT OF testreadme2.js

let expected = {
    dependentOnGlobal: null,
};

let mockedEnv = {
    someGlobal:'TURBOGLOBAL'
}

let includeplainjs = require('./index.js');
includeplainjs('samplereadme2.js', expected, mockedEnv);

console.log(expected.dependentOnGlobal());
// Should show:
// TURBOGLOBAL, is ok