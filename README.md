# includeplainjs
Includes content from javascript files which are not written according to node package rules.
Useful for including scripts which work in browser, for testing or mocking purposes.
Especially useful for porting/codeCovering old javascript.

# install

npm install includeplainjs

# usage for importing functions and variables
```js
/// CONTENT OF samplereadme1.js ; 
function loadedFunction() {
    return "I'm from sample";
}

/// CONTENT OF testreadme1.js

// values from 'expected' will be overriden
let expected = {
    loadedFunction: null,
    loadedVariable: 'whatever'
};

let includeplainjs = require('includeplainjs');
includeplainjs('samplereadme1.js', expected);

console.log(expected.loadedFunction(), expected.loadedVariable);
// Should show:
// I'm from sample, I'm global from sample
```

# usage for mocking
```js
/// CONTENT OF samplereadme2.js ;
function dependentOnGlobal() {
    return someGlobal+", is ok";
}

/// CONTENT OF testreadme2.js

let expected = {
    dependentOnGlobal: null,
};

let mockedEnv = {
    someGlobal:'TURBOGLOBAL'
}

let includeplainjs = require('includeplainjs');
includeplainjs('samplereadme2.js', expected, mockedEnv);

console.log(expected.dependentOnGlobal());
// Should show:
// TURBOGLOBAL, is ok

# license
ISC