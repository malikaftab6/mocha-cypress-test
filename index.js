const fs = require("fs");
const path = require("path");
const readline = require("readline");

const input_decotator_array = [];
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

// get input from user if user entered empty value then again call this question
// otherwise go the next question
const getDecoratorInput = () => {
	rl.question("Please enter test decorator name? ", function(name) {
		if(name.trim().length > 0){
			input_decotator_array.push(name);
			askToExit();}
		else
			getDecoratorInput();
	});
}

// get input from user if user wants to enter yes/y this means user want to add more decorator recall decorator name question
// if N then exit from this user input process 
const askToExit = () => {
	rl.question('Do you want to add more? (y/n) ', function (answer) {
		if(answer.trim().length > 0)
			answer.match(/^y(es)?$/i) ? getDecoratorInput() : answer.match(/^n(o)?$/i) ? rl.close(): askToExit();
		else
			askToExit();
  });
}

//for close console process this event trigger
rl.on("close", function() {
	input_decotator_array.length > 0 ? storeDateIntoFile() : null;
	console.log("\nYour entered decorators are: ", input_decotator_array);
	process.exit(0);
});

//check if file exit then delete and make a new json filr for store entered decorators
const storeDateIntoFile = () => {
	var mainDirPath = `${process.cwd()}/yattex-tool/test-decorators`;
	if (fs.existsSync(mainDirPath+'/decorators.json'))
		fs.rmdirSync(mainDirPath+'/decorators.json', {recursive: true})
	fs.writeFileSync(`${mainDirPath}/decorators.json`,  JSON.stringify(input_decotator_array));
}

getDecoratorInput();