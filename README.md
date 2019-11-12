# AWS Lambda with Typescript starter kit 

[![Greenkeeper badge](https://badges.greenkeeper.io/asemoon/lambda-typescript-starter.svg)](https://greenkeeper.io/)

Fork this repo to write lambda functions on AWS using Typescript. This repo only deals with writing the function itself
and not the deployment process. For deployment you can use tools such as Jenkins or
[node-lambda](https://www.npmjs.com/package/node-lambda).


## Key NPM commands

* `npm run build` -- Build the javascript into the build folder.
* `npm run lint` -- Run TS-Lint.
* `npm test` -- Run the unit tests with coverage.
* `npm run local` -- Run the function locally.


## Features

### Dotenv
This package is used to load the environment file if any and It's useful during local development. All the environment
variables are defined in a file named .env in the root directory of the project. 

### Jest
This is the testing framework used for automated tests. 

### TS-lint
This package is used to enforce consistent coding style. There is also a pre-commit hooks enabled to run TS-lint 
before every commit.

### Winston
There is a logger module developed on top of Winston package for logging purposes. 


