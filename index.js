const fs = require('fs');
module.exports = function(pathToFile, fillOutput={}, input={}) {
    const content = fs.readFileSync(pathToFile);
    const $$INPUT$$ = input;
    const $$CONTENT$$ = content.toString();
    const $$OUTPUT$$ = fillOutput;

    (function() {
        const pathToFile='';
        const input='';
        const fillOutput='';    

        let outStatements = [];
        for (let varName in $$OUTPUT$$) {
            outStatements.push(`$$OUTPUT$$['${varName}']=${varName};`);
        }
        
        with($$INPUT$$) {
            eval($$CONTENT$$+';\n'+outStatements.join('\n'));
        }
    })();
}