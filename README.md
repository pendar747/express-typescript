# Express js with Typescript Boilerplate

This is an easy to start boilerplate for making a node application using the
[Express framework](http://expressjs.com/) and [Typescript](https://www.typescriptlang.org/). 
It is meant to be simple and free of confusing modules. The point is to start with something easy to understand that lets you just jump into coding your application without spending time configuring the setup. You can then add modules and things you need as you go.

Some credit goes to 
[this tutorial](http://brianflove.com/2016/03/29/typescript-express-node-js/).

## Structure
```
/bin # compiled code and index.js (starting point of the server)
    index.js
    ...
/node_modules
    ...
/src # typescript files
    app.ts
    ...
/views # templated views (using jade/pug by defualt)
    index.jade 
.gitignore
.gruntfile.js
package.json
README.md
tslint.json

```

## Installation

`npm install`

## Running

First run grunt to compile your typescript code and put in the the bind dirictory.

`npm run grunt grunt`

Then do:

`npm start`

which runs nodemon and refreshes your browser using 
[reload](https://www.npmjs.com/package/reload) when you make changes.

## Note

Right now every new typescript file needs to include
```
/// <reference path="_all.d.ts" />
```
at the top, which is pretty repetitive and annoying.

Also don't forget to include the type definition of the npm modules by installing them as `npm install @types/<npm-module>`. For more info check out 
[this](https://blogs.msdn.microsoft.com/typescript/2016/06/15/the-future-of-declaration-files/).