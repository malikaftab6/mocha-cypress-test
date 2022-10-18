# Yattex CLI based test tool

Commands to run:

* npm install
* npm test

# How it works.

we are using mocha js for testing and for reporting we use mochawesome reporters. For taking failed case screenshots we use cypress. Using cypress we merge screenshots and awesome reporting. 

when we start testing using this " npm test " user need to input custom test decorators on console and after this all the test case run and store results in cypress/reports/mocha folder and also store failed cases screenshots inside folder. All the work done on real time. 


After test case completed our tool command will automatically run " npm run yattes " its generate .yattes folder and .yattes/run-${timestamp} folder. Inside  .yattes/run-${timestamp} this folder add scrrenshots UUID as its name, add test-output.json file and custom decorators list in decorators.json file. This tool also check if this project have a git then it create a git.json file and store git branch name and project name inside it. 

